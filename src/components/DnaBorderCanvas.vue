<template>
  <div
    ref="containerRef"
    class="dna-canvas-container pointer-events-none absolute inset-[-48px] sm:inset-[-64px] lg:inset-[-76px] z-35 overflow-visible select-none"
    aria-hidden="true"
  >
    <canvas ref="canvasRef" class="w-full h-full block"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const containerRef = ref<HTMLDivElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)

// --- Types & Interfaces ---

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  scale: number
  type: 'code' | 'spark' | 'cube' | 'flare'
  text?: string
  color: string
  glowColor: string
  rotation: number
  vRot: number
  alpha: number
}

interface RadiationWave {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
  color: string
}

interface ConstellationNode {
  sOffset: number
  radialDist: number
  radialAngle: number
  size: number
  baseAlpha: number
  twinkleSpeed: number
  color: string
}

interface MolecularHexagon {
  sPos: number
  outwardDist: number
  radius: number
  rotation: number
  vRot: number
  pulsePhase: number
  nodes: { x: number; y: number }[]
}

interface CircuitTrace {
  startX: number
  startY: number
  points: { x: number; y: number }[]
  pulseProgress: number
  pulseSpeed: number
  label?: string
  hasChevron?: boolean
}

// Programming symbols and tokens for code sparks
const CODE_SYMBOLS = [
  '</>',
  '{ }',
  'const',
  'fn()',
  '=>',
  'async',
  '0101',
  'git',
  'devNa',
  'npm',
  '[ ]',
  '&&',
  '||',
  '===',
  'import',
  'return',
  '*ptr',
  '0x1F',
  'class',
  'Vue',
  '/>',
  '!=',
  '++',
  '~sys',
  'API',
  '1010',
  'build',
  'await',
  '{...}',
  '()',
]

// Canvas State
let animationFrameId: number | null = null
let resizeObserver: ResizeObserver | null = null
let width = 0
let height = 0
let dpr = 1

// Geometry & Exact Offset Alignment
let padX = 64
let padY = 64
let rectW = 0
let rectH = 0
const cornerRadius = 14
let perimeterLength = 0

// DNA 3D Wave Dynamics
const helixRadius = 9.2 // Sleek amplitude matching high-end cyber rail
const baselineOutwardOffset = 2.0 // Subtle outward shift so it frames the card rim perfectly
let waveFrequency = 0.04
let waveCycles = 20
let time = 0
const baseSpeed = 0.024
let targetSpeed = 0.024
let currentSpeed = 0.024

// Particle & Wave Pools
const particles: Particle[] = []
const MAX_PARTICLES = 50
const radiationWaves: RadiationWave[] = []
const MAX_WAVES = 8
let waveEmitTimer = 0
let sparkTimer = 0

// Procedural Environmental Assets
let constellationNodes: ConstellationNode[] = []
let molecularHexagons: MolecularHexagon[] = []
let circuitTraces: CircuitTrace[] = []

// Mouse Interaction
let isHovered = false

// --- Perimeter Math (Rounded Rectangle) ---

interface PerimeterPoint {
  x: number
  y: number
  tx: number // Tangent X
  ty: number // Tangent Y
  nx: number // Outward Normal X
  ny: number // Outward Normal Y
}

function calculatePerimeterLength(w: number, h: number, r: number): number {
  const straightW = Math.max(0, w - 2 * r)
  const straightH = Math.max(0, h - 2 * r)
  return 2 * straightW + 2 * straightH + 2 * Math.PI * r
}

function getPointOnPerimeter(
  s: number,
  w: number,
  h: number,
  r: number,
  totalL: number,
  ox: number,
  oy: number
): PerimeterPoint {
  let dist = ((s % totalL) + totalL) % totalL
  const straightW = Math.max(0, w - 2 * r)
  const straightH = Math.max(0, h - 2 * r)
  const cornerArc = (Math.PI / 2) * r

  // 1. Top Edge: Left to Right
  if (dist < straightW) {
    const frac = dist / straightW
    return {
      x: ox + r + frac * straightW,
      y: oy,
      tx: 1,
      ty: 0,
      nx: 0,
      ny: -1,
    }
  }
  dist -= straightW

  // 2. Top-Right Corner
  if (dist < cornerArc) {
    const angle = -Math.PI / 2 + (dist / cornerArc) * (Math.PI / 2)
    const cx = ox + w - r
    const cy = oy + r
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
      nx: Math.cos(angle),
      ny: Math.sin(angle),
    }
  }
  dist -= cornerArc

  // 3. Right Edge: Top to Bottom
  if (dist < straightH) {
    const frac = dist / straightH
    return {
      x: ox + w,
      y: oy + r + frac * straightH,
      tx: 0,
      ty: 1,
      nx: 1,
      ny: 0,
    }
  }
  dist -= straightH

  // 4. Bottom-Right Corner
  if (dist < cornerArc) {
    const angle = (dist / cornerArc) * (Math.PI / 2)
    const cx = ox + w - r
    const cy = oy + h - r
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
      nx: Math.cos(angle),
      ny: Math.sin(angle),
    }
  }
  dist -= cornerArc

  // 5. Bottom Edge: Right to Left
  if (dist < straightW) {
    const frac = dist / straightW
    return {
      x: ox + w - r - frac * straightW,
      y: oy + h,
      tx: -1,
      ty: 0,
      nx: 0,
      ny: 1,
    }
  }
  dist -= straightW

  // 6. Bottom-Left Corner
  if (dist < cornerArc) {
    const angle = Math.PI / 2 + (dist / cornerArc) * (Math.PI / 2)
    const cx = ox + r
    const cy = oy + h - r
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      tx: -Math.sin(angle),
      ty: Math.cos(angle),
      nx: Math.cos(angle),
      ny: Math.sin(angle),
    }
  }
  dist -= cornerArc

  // 7. Left Edge: Bottom to Top
  if (dist < straightH) {
    const frac = dist / straightH
    return {
      x: ox,
      y: oy + h - r - frac * straightH,
      tx: 0,
      ty: -1,
      nx: -1,
      ny: 0,
    }
  }
  dist -= straightH

  // 8. Top-Left Corner
  const angle = Math.PI + (dist / cornerArc) * (Math.PI / 2)
  const cx = ox + r
  const cy = oy + r
  return {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
    tx: -Math.sin(angle),
    ty: Math.cos(angle),
    nx: Math.cos(angle),
    ny: Math.sin(angle),
  }
}

// --- Procedural Environmental Generation ---

function initCircuitTraces() {
  circuitTraces = []
  if (rectW <= 0 || rectH <= 0 || perimeterLength <= 0) return

  // Top Edge Traces
  circuitTraces.push({
    startX: padX + rectW * 0.22,
    startY: padY,
    points: [
      { x: padX + rectW * 0.22, y: padY - 18 },
      { x: padX + rectW * 0.22 - 22, y: padY - 38 },
      { x: padX + rectW * 0.22 - 58, y: padY - 38 },
    ],
    pulseProgress: 0.1,
    pulseSpeed: 0.007,
    label: '0101',
  })

  circuitTraces.push({
    startX: padX + rectW * 0.68,
    startY: padY,
    points: [
      { x: padX + rectW * 0.68, y: padY - 20 },
      { x: padX + rectW * 0.68 + 24, y: padY - 44 },
      { x: padX + rectW * 0.68 + 72, y: padY - 44 },
    ],
    pulseProgress: 0.45,
    pulseSpeed: 0.009,
    label: 'SYS.DEVNA',
    hasChevron: true,
  })

  // Top-Right Corner Traces
  circuitTraces.push({
    startX: padX + rectW,
    startY: padY + 24,
    points: [
      { x: padX + rectW + 22, y: padY + 24 },
      { x: padX + rectW + 44, y: padY },
      { x: padX + rectW + 54, y: padY - 10 },
    ],
    pulseProgress: 0.7,
    pulseSpeed: 0.008,
    label: '01101',
  })

  // Right Edge Traces
  circuitTraces.push({
    startX: padX + rectW,
    startY: padY + rectH * 0.5,
    points: [
      { x: padX + rectW + 20, y: padY + rectH * 0.5 },
      { x: padX + rectW + 42, y: padY + rectH * 0.5 + 22 },
      { x: padX + rectW + 42, y: padY + rectH * 0.5 + 52 },
    ],
    pulseProgress: 0.3,
    pulseSpeed: 0.006,
    hasChevron: true,
  })

  // Bottom Edge Traces
  circuitTraces.push({
    startX: padX + rectW * 0.35,
    startY: padY + rectH,
    points: [
      { x: padX + rectW * 0.35, y: padY + rectH + 18 },
      { x: padX + rectW * 0.35 + 26, y: padY + rectH + 42 },
      { x: padX + rectW * 0.35 + 75, y: padY + rectH + 42 },
    ],
    pulseProgress: 0.6,
    pulseSpeed: 0.007,
    label: 'DEV.DNA',
  })

  circuitTraces.push({
    startX: padX + rectW * 0.8,
    startY: padY + rectH,
    points: [
      { x: padX + rectW * 0.8, y: padY + rectH + 16 },
      { x: padX + rectW * 0.8 - 22, y: padY + rectH + 38 },
      { x: padX + rectW * 0.8 - 52, y: padY + rectH + 38 },
    ],
    pulseProgress: 0.85,
    pulseSpeed: 0.008,
    label: '1010',
  })

  // Left Edge Traces
  circuitTraces.push({
    startX: padX,
    startY: padY + rectH * 0.35,
    points: [
      { x: padX - 18, y: padY + rectH * 0.35 },
      { x: padX - 40, y: padY + rectH * 0.35 - 20 },
      { x: padX - 40, y: padY + rectH * 0.35 - 50 },
    ],
    pulseProgress: 0.2,
    pulseSpeed: 0.007,
    label: '0101',
    hasChevron: true,
  })

  circuitTraces.push({
    startX: padX,
    startY: padY + rectH * 0.75,
    points: [
      { x: padX - 16, y: padY + rectH * 0.75 },
      { x: padX - 36, y: padY + rectH * 0.75 + 20 },
      { x: padX - 54, y: padY + rectH * 0.75 + 20 },
    ],
    pulseProgress: 0.5,
    pulseSpeed: 0.008,
  })
}

function initMolecularHexagons() {
  molecularHexagons = []
  if (perimeterLength <= 0) return

  const count = 7
  const step = perimeterLength / count

  for (let i = 0; i < count; i++) {
    const sPos = i * step + (i % 2 === 0 ? 30 : -25)
    const radius = 8 + (i % 3) * 2.5
    const outwardDist = 18 + (i % 2) * 12

    const nodes: { x: number; y: number }[] = []
    for (let h = 0; h < 6; h++) {
      const angle = (h * Math.PI) / 3
      nodes.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      })
    }

    molecularHexagons.push({
      sPos,
      outwardDist,
      radius,
      rotation: (i * Math.PI) / 6,
      vRot: i % 2 === 0 ? 0.004 : -0.004,
      pulsePhase: i * 0.85,
      nodes,
    })
  }
}

function initConstellationNodes() {
  constellationNodes = []
  if (perimeterLength <= 0) return

  const count = Math.min(130, Math.floor(perimeterLength / 12))

  for (let i = 0; i < count; i++) {
    constellationNodes.push({
      sOffset: i * (perimeterLength / count) + (Math.random() - 0.5) * 20,
      radialDist: Math.random() * 26 - 13,
      radialAngle: Math.random() * Math.PI * 2,
      size: Math.random() * 1.9 + 0.8,
      baseAlpha: Math.random() * 0.65 + 0.28,
      twinkleSpeed: Math.random() * 0.04 + 0.02,
      color: Math.random() > 0.28 ? '#00f5ff' : '#ffffff',
    })
  }
}

// --- Dynamic Emitters (Radiation Waves & Sparks) ---

function emitRadiationWave(x: number, y: number) {
  if (radiationWaves.length >= MAX_WAVES) {
    radiationWaves.shift()
  }

  radiationWaves.push({
    x,
    y,
    radius: 4,
    maxRadius: Math.random() * 24 + 38,
    alpha: 0.95,
    color: '#00f0ff',
  })
}

function spawnSpark(
  x: number,
  y: number,
  nx: number,
  ny: number,
  tx: number,
  ty: number,
  isLeadPulse: boolean
) {
  if (particles.length >= MAX_PARTICLES) return

  const typeRoll = Math.random()
  let type: 'code' | 'spark' | 'cube' | 'flare' = 'spark'
  let text = ''
  let size = 3

  if (typeRoll > 0.34) {
    type = 'code'
    text = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)]
    size = Math.random() * 2.8 + 11
  } else if (typeRoll > 0.18) {
    type = 'cube'
    size = Math.random() * 3.5 + 4.5
  } else if (typeRoll > 0.08) {
    type = 'flare'
    size = Math.random() * 2.2 + 2.5
  } else {
    type = 'spark'
    size = Math.random() * 2 + 1.2
  }

  const outwardSpeed = (Math.random() * 1.8 + 0.6) * (isLeadPulse ? 1.5 : 1.0)
  const tangentSpeed = Math.random() * 1.0 - 0.3
  const angleSpread = (Math.random() - 0.5) * 0.75

  const cosA = Math.cos(angleSpread)
  const sinA = Math.sin(angleSpread)
  const rotNx = nx * cosA - ny * sinA
  const rotNy = nx * sinA + ny * cosA

  const vx = rotNx * outwardSpeed + tx * tangentSpeed
  const vy = rotNy * outwardSpeed + ty * tangentSpeed - (type === 'code' ? 0.25 : 0.1)

  const isCyan = Math.random() > 0.3
  const color = isCyan ? '#00f0ff' : '#ffffff'
  const glowColor = isCyan ? 'rgba(0, 240, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'

  particles.push({
    x: x + nx * (Math.random() * 4),
    y: y + ny * (Math.random() * 4),
    vx,
    vy,
    life: 0,
    maxLife: Math.floor(Math.random() * 34 + (type === 'code' ? 46 : 32)),
    size,
    scale: 0.1,
    type,
    text,
    color,
    glowColor,
    rotation: (Math.random() - 0.5) * 0.6,
    vRot: (Math.random() - 0.5) * 0.05,
    alpha: 1,
  })
}

// --- Render Sub-Routines ---

function drawCircuitTraces(ctx: CanvasRenderingContext2D) {
  ctx.save()

  for (const trace of circuitTraces) {
    trace.pulseProgress = (trace.pulseProgress + trace.pulseSpeed) % 1

    ctx.strokeStyle = 'rgba(0, 194, 255, 0.22)'
    ctx.lineWidth = 1.2
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    ctx.beginPath()
    ctx.moveTo(trace.startX, trace.startY)
    for (const pt of trace.points) {
      ctx.lineTo(pt.x, pt.y)
    }
    ctx.stroke()

    const endPt = trace.points[trace.points.length - 1]
    if (endPt) {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      ctx.arc(endPt.x, endPt.y, 3.2, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = '#00f0ff'
      ctx.shadowColor = '#00f0ff'
      ctx.shadowBlur = 6
      ctx.beginPath()
      ctx.arc(endPt.x, endPt.y, 1.4, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const allPts = [{ x: trace.startX, y: trace.startY }, ...trace.points]
    let totalLen = 0
    const segLens: number[] = []

    for (let j = 0; j < allPts.length - 1; j++) {
      const dx = allPts[j + 1].x - allPts[j].x
      const dy = allPts[j + 1].y - allPts[j].y
      const l = Math.hypot(dx, dy)
      segLens.push(l)
      totalLen += l
    }

    if (totalLen > 0) {
      let targetDist = trace.pulseProgress * totalLen
      let curX = allPts[0].x
      let curY = allPts[0].y

      for (let j = 0; j < segLens.length; j++) {
        if (targetDist <= segLens[j]) {
          const ratio = targetDist / segLens[j]
          curX = allPts[j].x + (allPts[j + 1].x - allPts[j].x) * ratio
          curY = allPts[j].y + (allPts[j + 1].y - allPts[j].y) * ratio
          break
        }
        targetDist -= segLens[j]
      }

      ctx.shadowColor = '#00f0ff'
      ctx.shadowBlur = 8
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(curX, curY, 2.2, 0, Math.PI * 2)
      ctx.fill()
      ctx.shadowBlur = 0
    }

    if (endPt && trace.label) {
      ctx.font = '600 8.5px "IBM Plex Mono", monospace'
      ctx.fillStyle = 'rgba(0, 240, 255, 0.55)'
      ctx.fillText(trace.label, endPt.x + 6, endPt.y + 3)
    } else if (endPt && trace.hasChevron) {
      ctx.font = '700 9px "IBM Plex Mono", monospace'
      ctx.fillStyle = 'rgba(0, 240, 255, 0.6)'
      ctx.fillText('>>>', endPt.x + 5, endPt.y + 3)
    }
  }

  ctx.restore()
}

function drawMolecularHexagons(ctx: CanvasRenderingContext2D) {
  ctx.save()

  for (const mol of molecularHexagons) {
    mol.rotation += mol.vRot
    mol.pulsePhase += 0.03
    const pulseAlpha = 0.35 + Math.sin(mol.pulsePhase) * 0.25

    const anchor = getPointOnPerimeter(
      mol.sPos,
      rectW,
      rectH,
      cornerRadius,
      perimeterLength,
      padX,
      padY
    )
    const cx = anchor.x + anchor.nx * mol.outwardDist
    const cy = anchor.y + anchor.ny * mol.outwardDist

    ctx.strokeStyle = `rgba(0, 194, 255, ${pulseAlpha * 0.4})`
    ctx.lineWidth = 0.9
    ctx.setLineDash([2, 2])
    ctx.beginPath()
    ctx.moveTo(anchor.x, anchor.y)
    ctx.lineTo(cx, cy)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(mol.rotation)

    ctx.strokeStyle = `rgba(0, 240, 255, ${pulseAlpha * 0.75})`
    ctx.lineWidth = 1.1
    ctx.shadowColor = '#00f0ff'
    ctx.shadowBlur = 5

    ctx.beginPath()
    for (let k = 0; k < 6; k++) {
      const v = mol.nodes[k]
      if (k === 0) ctx.moveTo(v.x, v.y)
      else ctx.lineTo(v.x, v.y)
    }
    ctx.closePath()
    ctx.stroke()

    for (let k = 0; k < 6; k++) {
      const v = mol.nodes[k]
      ctx.fillStyle = k % 2 === 0 ? '#00f0ff' : '#ffffff'
      ctx.shadowBlur = 6
      ctx.beginPath()
      ctx.arc(v.x, v.y, 1.3, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.restore()
  }

  ctx.restore()
}

function drawConstellationCloud(ctx: CanvasRenderingContext2D) {
  ctx.save()

  const renderedPts: { x: number; y: number; alpha: number; color: string }[] = []

  for (const node of constellationNodes) {
    const s = (node.sOffset + time * 35) % perimeterLength
    const pt = getPointOnPerimeter(s, rectW, rectH, cornerRadius, perimeterLength, padX, padY)

    const angle = node.radialAngle + time * node.twinkleSpeed * 12
    const currentDist = node.radialDist + Math.sin(angle) * 4

    const px = pt.x + pt.nx * currentDist + pt.tx * (Math.cos(angle) * 3)
    const py = pt.y + pt.ny * currentDist + pt.ty * (Math.cos(angle) * 3)

    const twinkle = 0.5 + Math.sin(time * 3 + node.sOffset) * 0.5
    const alpha = Math.min(1, Math.max(0.15, node.baseAlpha * twinkle * (isHovered ? 1.35 : 1)))

    renderedPts.push({ x: px, y: py, alpha, color: node.color })

    ctx.shadowColor = node.color
    ctx.shadowBlur = 6
    ctx.fillStyle = node.color
    ctx.globalAlpha = alpha
    ctx.beginPath()
    ctx.arc(px, py, node.size, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.lineWidth = 0.65
  ctx.shadowBlur = 0

  for (let i = 0; i < renderedPts.length; i++) {
    const p1 = renderedPts[i]
    for (let j = i + 1; j < Math.min(i + 5, renderedPts.length); j++) {
      const p2 = renderedPts[j]
      const dx = p2.x - p1.x
      const dy = p2.y - p1.y
      const dist = Math.hypot(dx, dy)

      if (dist < 26) {
        const lineAlpha = (1 - dist / 26) * 0.3 * Math.min(p1.alpha, p2.alpha)
        ctx.strokeStyle = `rgba(0, 240, 255, ${lineAlpha})`
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }
    }
  }

  ctx.restore()
}

function updateAndDrawRadiationWaves(ctx: CanvasRenderingContext2D) {
  ctx.save()

  for (let i = radiationWaves.length - 1; i >= 0; i--) {
    const w = radiationWaves[i]
    w.radius += 1.45
    const progress = w.radius / w.maxRadius
    w.alpha = Math.max(0, 1 - progress)

    if (w.radius >= w.maxRadius || w.alpha <= 0.01) {
      radiationWaves.splice(i, 1)
      continue
    }

    ctx.shadowColor = '#00f0ff'
    ctx.shadowBlur = 10
    ctx.strokeStyle = `rgba(0, 240, 255, ${w.alpha * 0.85})`
    ctx.lineWidth = Math.max(0.5, (1 - progress) * 2.2)

    ctx.beginPath()
    ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2)
    ctx.stroke()

    if (w.radius > 10) {
      ctx.shadowBlur = 5
      ctx.strokeStyle = `rgba(255, 255, 255, ${w.alpha * 0.5})`
      ctx.lineWidth = 0.8
      ctx.beginPath()
      ctx.arc(w.x, w.y, w.radius * 0.65, 0, Math.PI * 2)
      ctx.stroke()
    }
  }

  ctx.restore()
}

function updateAndDrawParticles(ctx: CanvasRenderingContext2D) {
  ctx.save()

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]
    p.life++

    if (p.life >= p.maxLife) {
      particles.splice(i, 1)
      continue
    }

    p.x += p.vx
    p.y += p.vy
    p.vx *= 0.965
    p.vy *= 0.965
    p.rotation += p.vRot

    const progress = p.life / p.maxLife
    p.alpha = Math.sin(progress * Math.PI)

    if (progress < 0.18) {
      p.scale = progress / 0.18
    } else {
      p.scale = 1 - (progress - 0.18) * 0.3
    }

    ctx.save()
    ctx.translate(p.x, p.y)
    ctx.rotate(p.rotation)
    ctx.scale(p.scale, p.scale)
    ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha * 0.98))

    if (p.type === 'code' && p.text) {
      ctx.font = `600 ${p.size}px 'IBM Plex Mono', monospace`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      ctx.shadowColor = p.glowColor
      ctx.shadowBlur = 12
      ctx.fillStyle = p.color
      ctx.fillText(p.text, 0, 0)

      ctx.shadowBlur = 0
      ctx.fillStyle = '#ffffff'
      ctx.fillText(p.text, 0, 0)
    } else if (p.type === 'cube') {
      const half = p.size / 2
      ctx.shadowColor = p.glowColor
      ctx.shadowBlur = 8

      ctx.fillStyle = p.color === '#00f0ff' ? 'rgba(0, 240, 255, 0.3)' : 'rgba(255, 255, 255, 0.3)'
      ctx.fillRect(-half, -half, p.size, p.size)

      ctx.strokeStyle = p.color
      ctx.lineWidth = 1.2
      ctx.strokeRect(-half, -half, p.size, p.size)
    } else if (p.type === 'flare') {
      ctx.shadowColor = p.glowColor
      ctx.shadowBlur = 8
      ctx.strokeStyle = p.color
      ctx.lineWidth = 1.2

      const arm = p.size * 1.8
      ctx.beginPath()
      ctx.moveTo(-arm, 0)
      ctx.lineTo(arm, 0)
      ctx.moveTo(0, -arm)
      ctx.lineTo(0, arm)
      ctx.stroke()

      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(0, 0, 1.2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.shadowColor = p.glowColor
      ctx.shadowBlur = 7
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.arc(0, 0, p.size, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.restore()
  }

  ctx.restore()
}

// --- Main 3D DNA Double Helix Calculation & Render ---

function resize() {
  if (!containerRef.value || !canvasRef.value) return

  const containerRect = containerRef.value.getBoundingClientRect()
  const parentRect = containerRef.value.parentElement?.getBoundingClientRect()

  width = containerRect.width
  height = containerRect.height
  dpr = Math.min(window.devicePixelRatio || 1, 2)

  canvasRef.value.width = width * dpr
  canvasRef.value.height = height * dpr

  // Measure exact pixel offset between canvas container and gallery frame
  if (parentRect && parentRect.width > 0 && parentRect.height > 0) {
    padX = Math.max(10, Math.round(parentRect.left - containerRect.left))
    padY = Math.max(10, Math.round(parentRect.top - containerRect.top))
    rectW = Math.round(parentRect.width)
    rectH = Math.round(parentRect.height)
  } else {
    padX = width < 500 ? 48 : width < 900 ? 64 : 76
    padY = padX
    rectW = Math.max(10, width - padX * 2)
    rectH = Math.max(10, height - padY * 2)
  }

  perimeterLength = calculatePerimeterLength(rectW, rectH, cornerRadius)

  // Calculate integer wave cycles for seamless 360-degree wrapping
  const approxWavelength = 76
  waveCycles = Math.max(8, Math.round(perimeterLength / approxWavelength))
  waveFrequency = (waveCycles * 2 * Math.PI) / perimeterLength

  // Rebuild environmental scenes
  initCircuitTraces()
  initMolecularHexagons()
  initConstellationNodes()
}

function render() {
  if (!canvasRef.value || width <= 0 || height <= 0 || perimeterLength <= 0) {
    animationFrameId = requestAnimationFrame(render)
    return
  }

  const ctx = canvasRef.value.getContext('2d')
  if (!ctx) return

  ctx.save()
  ctx.scale(dpr, dpr)
  ctx.clearRect(0, 0, width, height)

  currentSpeed += (targetSpeed - currentSpeed) * 0.08
  time += currentSpeed

  const leadPulseDist = (time * 145) % perimeterLength
  const pulseSpread = perimeterLength * 0.13

  // 1. Draw Background PCB Circuit Traces
  drawCircuitTraces(ctx)

  // 2. Draw Molecular Hexagon Clusters
  drawMolecularHexagons(ctx)

  // 3. Draw Constellation Stardust Cloud
  drawConstellationCloud(ctx)

  // 4. Draw Subtle Baseline Track Rail with Soft Ambient Border
  ctx.save()
  ctx.strokeStyle = 'rgba(0, 168, 255, 0.12)'
  ctx.lineWidth = 1.0
  ctx.shadowColor = 'rgba(0, 168, 255, 0.2)'
  ctx.shadowBlur = 4
  ctx.beginPath()
  if (typeof (ctx as any).roundRect === 'function') {
    (ctx as any).roundRect(padX, padY, rectW, rectH, cornerRadius)
  } else {
    const r = cornerRadius
    ctx.moveTo(padX + r, padY)
    ctx.arcTo(padX + rectW, padY, padX + rectW, padY + rectH, r)
    ctx.arcTo(padX + rectW, padY + rectH, padX, padY + rectH, r)
    ctx.arcTo(padX, padY + rectH, padX, padY, r)
    ctx.arcTo(padX, padY, padX + rectW, padY, r)
    ctx.closePath()
  }
  ctx.stroke()
  ctx.restore()

  // 5. Sample Points along Perimeter for the 3D Double Helix
  const stepPx = 2.8
  const totalSamples = Math.ceil(perimeterLength / stepPx)

  interface StrandPoint {
    x: number
    y: number
    z: number
    nx: number
    ny: number
    tx: number
    ty: number
    s: number
    phase: number
  }

  const strandCyan: StrandPoint[] = []
  const strandWhite: StrandPoint[] = []

  for (let i = 0; i <= totalSamples; i++) {
    const s = (i * stepPx) % perimeterLength
    const pt = getPointOnPerimeter(s, rectW, rectH, cornerRadius, perimeterLength, padX, padY)

    const phase = s * waveFrequency + time * 1.65

    const distToPulse = Math.min(
      Math.abs(s - leadPulseDist),
      perimeterLength - Math.abs(s - leadPulseDist)
    )
    const pulseFactor = Math.max(0, 1 - distToPulse / pulseSpread)
    const currentAmp = helixRadius + pulseFactor * 2.8

    // Shift baseline slightly outward to hug the outer edge of the gallery card
    const baseX = pt.x + pt.nx * baselineOutwardOffset
    const baseY = pt.y + pt.ny * baselineOutwardOffset

    // Strand 1: Electric Cyan
    const sin1 = Math.sin(phase)
    const cos1 = Math.cos(phase)
    const offset1 = sin1 * currentAmp

    strandCyan.push({
      x: baseX + pt.nx * offset1,
      y: baseY + pt.ny * offset1,
      z: cos1,
      nx: pt.nx,
      ny: pt.ny,
      tx: pt.tx,
      ty: pt.ty,
      s,
      phase,
    })

    // Strand 2: Radiant White (180 deg / PI offset)
    const sin2 = Math.sin(phase + Math.PI)
    const cos2 = Math.cos(phase + Math.PI)
    const offset2 = sin2 * currentAmp

    strandWhite.push({
      x: baseX + pt.nx * offset2,
      y: baseY + pt.ny * offset2,
      z: cos2,
      nx: pt.nx,
      ny: pt.ny,
      tx: pt.tx,
      ty: pt.ty,
      s,
      phase: phase + Math.PI,
    })
  }

  function drawStrandLayer(points: StrandPoint[], isForeground: boolean, colorType: 'cyan' | 'white') {
    ctx.save()

    for (let i = 0; i < points.length - 1; i++) {
      const pA = points[i]
      const pB = points[i + 1]

      const avgZ = (pA.z + pB.z) / 2
      if (isForeground ? avgZ < -0.05 : avgZ > 0.05) {
        continue
      }

      const depthNorm = (avgZ + 1) / 2
      const alpha = isForeground
        ? 0.82 + depthNorm * 0.18
        : 0.18 + depthNorm * 0.32

      const lineWidth = isForeground
        ? 2.2 + depthNorm * 1.4
        : 1.0 + depthNorm * 0.6

      const distToPulse = Math.min(
        Math.abs(pA.s - leadPulseDist),
        perimeterLength - Math.abs(pA.s - leadPulseDist)
      )
      const pulseFactor = Math.max(0, 1 - distToPulse / pulseSpread)

      if (colorType === 'cyan') {
        ctx.shadowColor = '#00A8FF'
        ctx.shadowBlur = isForeground ? 6 + pulseFactor * 4 : 3
        ctx.strokeStyle = `rgba(0, 168, 255, ${Math.min(0.85, alpha * 0.75 + pulseFactor * 0.2)})`
      } else {
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)'
        ctx.shadowBlur = isForeground ? 5 + pulseFactor * 3 : 2
        ctx.strokeStyle = `rgba(220, 235, 255, ${Math.min(0.8, alpha * 0.7 + pulseFactor * 0.2)})`
      }

      ctx.lineWidth = (lineWidth * 0.7) + pulseFactor * 0.4
      ctx.lineCap = 'round'
      ctx.beginPath()
      ctx.moveTo(pA.x, pA.y)
      ctx.lineTo(pB.x, pB.y)
      ctx.stroke()

      // Laser white core highlight pass for foremost segments
      if (isForeground && depthNorm > 0.52) {
        ctx.save()
        ctx.shadowBlur = 0
        ctx.strokeStyle = `rgba(255, 255, 255, ${(depthNorm - 0.52) * 1.9})`
        ctx.lineWidth = 0.95
        ctx.beginPath()
        ctx.moveTo(pA.x, pA.y)
        ctx.lineTo(pB.x, pB.y)
        ctx.stroke()
        ctx.restore()
      }
    }

    ctx.restore()
  }

  // 6. Draw Background Strands (z < 0)
  drawStrandLayer(strandCyan, false, 'cyan')
  drawStrandLayer(strandWhite, false, 'white')

  // 7. Draw Connecting Base-Pair Hydrogen Rungs (with center bond gap)
  const rungsPerCycle = 7
  const totalRungs = waveCycles * rungsPerCycle
  const rungStepDist = perimeterLength / totalRungs

  for (let r = 0; r < totalRungs; r++) {
    const s = r * rungStepDist
    const sampleIdx = Math.min(Math.floor(s / stepPx), totalSamples)
    const pC = strandCyan[sampleIdx]
    const pW = strandWhite[sampleIdx]

    if (!pC || !pW) continue

    const midX = (pC.x + pW.x) / 2
    const midY = (pC.y + pW.y) / 2

    const rungZ = Math.abs(pC.z - pW.z) / 2
    const rungAlpha = 0.35 + (1 - rungZ) * 0.65

    const distToPulse = Math.min(
      Math.abs(s - leadPulseDist),
      perimeterLength - Math.abs(s - leadPulseDist)
    )
    const pulseFactor = Math.max(0, 1 - distToPulse / pulseSpread)

    // Direction vector for hydrogen bond gap in center
    const dirX = midX - pC.x
    const dirY = midY - pC.y
    const rungLen = Math.hypot(dirX, dirY)
    const uX = rungLen > 0 ? dirX / rungLen : 0
    const uY = rungLen > 0 ? dirY / rungLen : 0
    const gap = 1.3 // Subtle center gap representing hydrogen bonding

    const cEnd = { x: midX - uX * gap, y: midY - uY * gap }
    const wEnd = { x: midX + uX * gap, y: midY + uY * gap }

    // Cyan half of rung (soft ambient)
    ctx.save()
    ctx.shadowColor = '#00A8FF'
    ctx.shadowBlur = 4 + pulseFactor * 3
    ctx.strokeStyle = `rgba(0, 168, 255, ${Math.min(0.7, rungAlpha * 0.65 + pulseFactor * 0.2)})`
    ctx.lineWidth = 1.0 + pulseFactor * 0.4
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(pC.x, pC.y)
    ctx.lineTo(cEnd.x, cEnd.y)
    ctx.stroke()
    ctx.restore()

    // White half of rung (soft ambient)
    ctx.save()
    ctx.shadowColor = '#ffffff'
    ctx.shadowBlur = 3 + pulseFactor * 3
    ctx.strokeStyle = `rgba(235, 245, 255, ${Math.min(0.65, rungAlpha * 0.6 + pulseFactor * 0.2)})`
    ctx.lineWidth = 1.0 + pulseFactor * 0.4
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(wEnd.x, wEnd.y)
    ctx.lineTo(pW.x, pW.y)
    ctx.stroke()
    ctx.restore()

    // Subtle junction node at Cyan strand
    const cNodeSize = 1.2 + (pC.z + 1) * 0.6 + pulseFactor * 0.5
    ctx.save()
    ctx.shadowColor = '#00A8FF'
    ctx.shadowBlur = 4
    ctx.fillStyle = pC.z > 0 ? '#38bdf8' : 'rgba(0, 168, 255, 0.5)'
    ctx.beginPath()
    ctx.arc(pC.x, pC.y, cNodeSize, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    // Subtle junction node at White strand
    const wNodeSize = 1.2 + (pW.z + 1) * 0.6 + pulseFactor * 0.5
    ctx.save()
    ctx.shadowColor = '#ffffff'
    ctx.shadowBlur = 3
    ctx.fillStyle = pW.z > 0 ? '#ffffff' : 'rgba(235, 245, 255, 0.5)'
    ctx.beginPath()
    ctx.arc(pW.x, pW.y, wNodeSize, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  // 8. Draw Foreground Strands (z >= 0)
  drawStrandLayer(strandCyan, true, 'cyan')
  drawStrandLayer(strandWhite, true, 'white')

  // 9. Lead Quantum Pulse Head: Radiation Waves & Emitter
  const leadIdx = Math.min(Math.floor(leadPulseDist / stepPx), totalSamples)
  const leadPt = strandCyan[leadIdx]

  if (leadPt) {
    ctx.save()
    // Soft ambient quantum energy core
    ctx.shadowColor = '#00A8FF'
    ctx.shadowBlur = 8
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(leadPt.x, leadPt.y, 3.2, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = '#00A8FF'
    ctx.beginPath()
    ctx.arc(leadPt.x, leadPt.y, 1.8, 0, Math.PI * 2)
    ctx.fill()

    // Delicate micro-arc flicker
    if (Math.random() > 0.6) {
      ctx.shadowColor = '#00A8FF'
      ctx.shadowBlur = 4
      ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(0, 168, 255, 0.6)' : 'rgba(255, 255, 255, 0.6)'
      ctx.lineWidth = 0.8
      ctx.beginPath()
      let arcX = leadPt.x
      let arcY = leadPt.y
      ctx.moveTo(arcX, arcY)
      const segments = 2
      const arcLen = Math.random() * 12 + 6
      for (let s = 1; s <= segments; s++) {
        const segRatio = s / segments
        const jagX = (Math.random() - 0.5) * 4
        const jagY = (Math.random() - 0.5) * 4
        arcX = leadPt.x + leadPt.nx * (arcLen * segRatio) + jagX
        arcY = leadPt.y + leadPt.ny * (arcLen * segRatio) + jagY
        ctx.lineTo(arcX, arcY)
      }
      ctx.stroke()
    }
    ctx.restore()

    waveEmitTimer++
    if (waveEmitTimer % (isHovered ? 12 : 18) === 0) {
      emitRadiationWave(leadPt.x, leadPt.y)
    }

    sparkTimer++
    if (sparkTimer % (isHovered ? 2 : 3) === 0) {
      spawnSpark(leadPt.x, leadPt.y, leadPt.nx, leadPt.ny, leadPt.tx, leadPt.ty, true)

      if (Math.random() > 0.4) {
        const randIdx = Math.floor(Math.random() * totalSamples)
        const randPt = Math.random() > 0.5 ? strandCyan[randIdx] : strandWhite[randIdx]
        if (randPt && randPt.z > 0.2) {
          spawnSpark(randPt.x, randPt.y, randPt.nx, randPt.ny, randPt.tx, randPt.ty, false)
        }
      }
    }
  }

  // 10. Update and Draw Expanding Radiation Shockwaves
  updateAndDrawRadiationWaves(ctx)

  // 11. Update and Draw Code Symbol Sparks
  updateAndDrawParticles(ctx)

  ctx.restore()
  animationFrameId = requestAnimationFrame(render)
}

// --- Mouse Interaction ---

function handleMouseEnter() {
  isHovered = true
  targetSpeed = baseSpeed * 1.85

  if (perimeterLength > 0) {
    for (let k = 0; k < 10; k++) {
      const randS = Math.random() * perimeterLength
      const pt = getPointOnPerimeter(randS, rectW, rectH, cornerRadius, perimeterLength, padX, padY)
      spawnSpark(pt.x, pt.y, pt.nx, pt.ny, pt.tx, pt.ty, true)
    }
  }
}

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value) return
  if (Math.random() > 0.65) {
    const rect = containerRef.value.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const nx = (Math.random() - 0.5) * 1.5
    const ny = (Math.random() - 0.5) * 1.5
    spawnSpark(mx, my, nx, ny, 0, 0, false)
  }
}

function handleMouseLeave() {
  isHovered = false
  targetSpeed = baseSpeed
}

// --- Lifecycle Hooks ---

onMounted(() => {
  resize()

  if (containerRef.value?.parentElement) {
    containerRef.value.parentElement.addEventListener('mouseenter', handleMouseEnter)
    containerRef.value.parentElement.addEventListener('mousemove', handleMouseMove)
    containerRef.value.parentElement.addEventListener('mouseleave', handleMouseLeave)
  }

  if (typeof ResizeObserver !== 'undefined' && containerRef.value) {
    resizeObserver = new ResizeObserver(() => {
      resize()
    })
    resizeObserver.observe(containerRef.value)
  }

  window.addEventListener('resize', resize)
  animationFrameId = requestAnimationFrame(render)
})

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  if (containerRef.value?.parentElement) {
    containerRef.value.parentElement.removeEventListener('mouseenter', handleMouseEnter)
    containerRef.value.parentElement.removeEventListener('mousemove', handleMouseMove)
    containerRef.value.parentElement.removeEventListener('mouseleave', handleMouseLeave)
  }
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  window.removeEventListener('resize', resize)
})
</script>

<style scoped>
.dna-canvas-container {
  pointer-events: none;
}
</style>
