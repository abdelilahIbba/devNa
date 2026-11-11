<template>
  <div
    class="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    aria-hidden="true"
    :style="{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }"
  >
    <canvas ref="canvasRef" class="w-full h-full block" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const isLoaded = ref(false)

// ─── Types ───────────────────────────────────────────────────────────────────
interface DnaStrand {
  centerYRatio: number
  startXRatio: number
  endXRatio: number
  tilt: number
  radius: number
  pitch: number
  basePairs: number
  rotationSpeed: number
  waveSpeed: number
  waveFreq: number
  waveAmp: number
  opacity: number
  scale: number
  isPrimary: boolean
  rotAngle: number
  wavePhase: number
}

interface ConstellationNode {
  bpIndex: number
  offsetRadial: number
  offsetAngle: number
  driftSpeed: number
  x: number
  y: number
}

interface SparkleParticle {
  t: number
  speed: number
  radialDist: number
  orbitAngle: number
  orbitSpeed: number
  size: number
  flickerSpeed: number
  phase: number
}

// ─── Module state ────────────────────────────────────────────────────────────
let ctx: CanvasRenderingContext2D | null = null
let rafId = 0
let lastFrameTime = 0
let dpr = 1
let isMobile = false
let isPaused = false

// Offscreen canvases
let staticCircuitCanvas: HTMLCanvasElement | null = null
let cyanGlowSprite: HTMLCanvasElement | null = null
let whiteGlowSprite: HTMLCanvasElement | null = null
let blueGlowSprite: HTMLCanvasElement | null = null

// Strands & accessories
const strands: DnaStrand[] = []
const strandConstellations: ConstellationNode[][] = []
const strandSparkles: SparkleParticle[][] = []

// ─── Build Offscreen Glow Sprites (Created once) ─────────────────────────────
function buildSprites(): void {
  // 1. Cyan Glow Sprite (36x36)
  const cSize = 36
  cyanGlowSprite = document.createElement('canvas')
  cyanGlowSprite.width = cSize
  cyanGlowSprite.height = cSize
  const cCtx = cyanGlowSprite.getContext('2d')
  if (cCtx) {
    const cRad = cSize / 2
    const g = cCtx.createRadialGradient(cRad, cRad, 0, cRad, cRad, cRad)
    g.addColorStop(0, 'rgba(0, 240, 255, 1)')
    g.addColorStop(0.35, 'rgba(0, 200, 255, 0.75)')
    g.addColorStop(0.7, 'rgba(0, 160, 255, 0.25)')
    g.addColorStop(1, 'rgba(0, 140, 255, 0)')
    cCtx.fillStyle = g
    cCtx.fillRect(0, 0, cSize, cSize)
  }

  // 2. White Core Glint Sprite (24x24)
  const wSize = 24
  whiteGlowSprite = document.createElement('canvas')
  whiteGlowSprite.width = wSize
  whiteGlowSprite.height = wSize
  const wCtx = whiteGlowSprite.getContext('2d')
  if (wCtx) {
    const wRad = wSize / 2
    const g = wCtx.createRadialGradient(wRad, wRad, 0, wRad, wRad, wRad)
    g.addColorStop(0, 'rgba(255, 255, 255, 1)')
    g.addColorStop(0.4, 'rgba(210, 245, 255, 0.8)')
    g.addColorStop(0.8, 'rgba(125, 211, 252, 0.2)')
    g.addColorStop(1, 'rgba(125, 211, 252, 0)')
    wCtx.fillStyle = g
    wCtx.fillRect(0, 0, wSize, wSize)
  }

  // 3. Ambient Blue Glow Sprite (64x64)
  const bSize = 64
  blueGlowSprite = document.createElement('canvas')
  blueGlowSprite.width = bSize
  blueGlowSprite.height = bSize
  const bCtx = blueGlowSprite.getContext('2d')
  if (bCtx) {
    const bRad = bSize / 2
    const g = bCtx.createRadialGradient(bRad, bRad, 0, bRad, bRad, bRad)
    g.addColorStop(0, 'rgba(0, 140, 255, 0.65)')
    g.addColorStop(0.5, 'rgba(0, 80, 220, 0.25)')
    g.addColorStop(1, 'rgba(0, 40, 180, 0)')
    bCtx.fillStyle = g
    bCtx.fillRect(0, 0, bSize, bSize)
  }
}

// ─── Build Static Circuit & PCB Layer (Drawn ONCE onto offscreen canvas) ─────
function renderStaticCircuitCanvas(W: number, H: number): void {
  if (!staticCircuitCanvas) {
    staticCircuitCanvas = document.createElement('canvas')
  }
  staticCircuitCanvas.width = W
  staticCircuitCanvas.height = H
  const sCtx = staticCircuitCanvas.getContext('2d')
  if (!sCtx) return

  sCtx.clearRect(0, 0, W, H)

  // Subtle ambient background gradient
  const bgGrad = sCtx.createRadialGradient(W * 0.5, H * 0.45, W * 0.1, W * 0.5, H * 0.45, W * 0.8)
  bgGrad.addColorStop(0, 'rgba(0, 168, 255, 0.08)')
  bgGrad.addColorStop(0.6, 'rgba(5, 15, 45, 0.02)')
  bgGrad.addColorStop(1, 'transparent')
  sCtx.fillStyle = bgGrad
  sCtx.fillRect(0, 0, W, H)

  // PCB Circuit Traces
  sCtx.strokeStyle = 'rgba(0, 210, 255, 0.22)'
  sCtx.fillStyle = 'rgba(0, 220, 255, 0.45)'
  sCtx.lineWidth = 1.2 * dpr

  // Pre-defined cyber PCB trace paths matching banner-devnapp.jpg
  const traces = [
    // Top-left circuit network
    [
      { x: 0, y: H * 0.12 },
      { x: W * 0.18, y: H * 0.12 },
      { x: W * 0.24, y: H * 0.18 },
      { x: W * 0.38, y: H * 0.18 }
    ],
    [
      { x: 0, y: H * 0.18 },
      { x: W * 0.14, y: H * 0.18 },
      { x: W * 0.20, y: H * 0.24 },
      { x: W * 0.32, y: H * 0.24 }
    ],
    [
      { x: W * 0.08, y: 0 },
      { x: W * 0.08, y: H * 0.14 },
      { x: W * 0.15, y: H * 0.21 },
      { x: W * 0.15, y: H * 0.35 }
    ],
    // Top-right circuit network
    [
      { x: W, y: H * 0.10 },
      { x: W * 0.82, y: H * 0.10 },
      { x: W * 0.75, y: H * 0.17 },
      { x: W * 0.60, y: H * 0.17 }
    ],
    [
      { x: W, y: H * 0.16 },
      { x: W * 0.86, y: H * 0.16 },
      { x: W * 0.79, y: H * 0.23 },
      { x: W * 0.68, y: H * 0.23 }
    ],
    [
      { x: W * 0.88, y: 0 },
      { x: W * 0.88, y: H * 0.12 },
      { x: W * 0.82, y: H * 0.18 },
      { x: W * 0.82, y: H * 0.32 }
    ],
    // Mid-left branch
    [
      { x: 0, y: H * 0.42 },
      { x: W * 0.16, y: H * 0.42 },
      { x: W * 0.22, y: H * 0.48 },
      { x: W * 0.35, y: H * 0.48 }
    ],
    [
      { x: 0, y: H * 0.48 },
      { x: W * 0.12, y: H * 0.48 },
      { x: W * 0.18, y: H * 0.54 },
      { x: W * 0.28, y: H * 0.54 }
    ],
    // Mid-right branch
    [
      { x: W, y: H * 0.52 },
      { x: W * 0.80, y: H * 0.52 },
      { x: W * 0.74, y: H * 0.58 },
      { x: W * 0.62, y: H * 0.58 }
    ],
    [
      { x: W, y: H * 0.58 },
      { x: W * 0.85, y: H * 0.58 },
      { x: W * 0.78, y: H * 0.65 },
      { x: W * 0.68, y: H * 0.65 }
    ],
    // Bottom-left circuit network
    [
      { x: 0, y: H * 0.78 },
      { x: W * 0.18, y: H * 0.78 },
      { x: W * 0.25, y: H * 0.71 },
      { x: W * 0.42, y: H * 0.71 }
    ],
    [
      { x: 0, y: H * 0.84 },
      { x: W * 0.14, y: H * 0.84 },
      { x: W * 0.20, y: H * 0.78 },
      { x: W * 0.34, y: H * 0.78 }
    ],
    // Bottom-right circuit network
    [
      { x: W, y: H * 0.82 },
      { x: W * 0.82, y: H * 0.82 },
      { x: W * 0.75, y: H * 0.75 },
      { x: W * 0.58, y: H * 0.75 }
    ],
    [
      { x: W, y: H * 0.88 },
      { x: W * 0.86, y: H * 0.88 },
      { x: W * 0.80, y: H * 0.82 },
      { x: W * 0.66, y: H * 0.82 }
    ]
  ]

  // Draw each trace path
  for (const path of traces) {
    sCtx.beginPath()
    sCtx.moveTo(path[0].x, path[0].y)
    for (let i = 1; i < path.length; i++) {
      sCtx.lineTo(path[i].x, path[i].y)
    }
    sCtx.stroke()

    // Terminal node pad (circle) at end
    const last = path[path.length - 1]
    sCtx.beginPath()
    sCtx.arc(last.x, last.y, 3.5 * dpr, 0, Math.PI * 2)
    sCtx.fill()

    sCtx.beginPath()
    sCtx.arc(last.x, last.y, 6.5 * dpr, 0, Math.PI * 2)
    sCtx.strokeStyle = 'rgba(0, 220, 255, 0.35)'
    sCtx.stroke()
  }

  // Draw Bus-Line Chevrons (///) at intervals like in banner-devnapp.jpg
  const chevronGroups = [
    { x: W * 0.17, y: H * 0.38 },
    { x: W * 0.78, y: H * 0.56 },
    { x: W * 0.22, y: H * 0.90 }
  ]
  sCtx.fillStyle = 'rgba(0, 220, 255, 0.45)'
  for (const g of chevronGroups) {
    for (let i = 0; i < 4; i++) {
      const cx = g.x + i * 9 * dpr
      sCtx.beginPath()
      sCtx.moveTo(cx, g.y)
      sCtx.lineTo(cx + 6 * dpr, g.y)
      sCtx.lineTo(cx + 2 * dpr, g.y + 12 * dpr)
      sCtx.lineTo(cx - 4 * dpr, g.y + 12 * dpr)
      sCtx.closePath()
      sCtx.fill()
    }
  }

  // Draw Faint Cyber Binary Matrix Watermarks (0101)
  sCtx.font = `${Math.round(10 * dpr)}px 'IBM Plex Mono', monospace`
  sCtx.fillStyle = 'rgba(0, 210, 255, 0.16)'

  const binaryBlocks = [
    { x: W * 0.14, y: H * 0.28, text: '0101 1010 0110' },
    { x: W * 0.14, y: H * 0.31, text: '1100 0101 0011' },
    { x: W * 0.72, y: H * 0.62, text: '01101 01100011' },
    { x: W * 0.72, y: H * 0.64, text: '01010101 1100' },
    { x: W * 0.48, y: H * 0.15, text: '0101' },
    { x: W * 0.26, y: H * 0.65, text: '1010 0101' }
  ]

  for (const b of binaryBlocks) {
    sCtx.fillText(b.text, b.x, b.y)
  }
}

// ─── Initialize Strands & Objects ───────────────────────────────────────────
function initStrands(): void {
  strands.length = 0
  strandConstellations.length = 0
  strandSparkles.length = 0

  const primaryBp = isMobile ? 22 : 46
  const microBp = isMobile ? 12 : 22
  const constCount = isMobile ? 10 : 26
  const sparkleCount = isMobile ? 16 : 42

  // 1. Primary Strand A (Upper Half - Dynamic Holographic Double Helix)
  strands.push({
    centerYRatio: 0.32,
    startXRatio: -0.06,
    endXRatio: 1.06,
    tilt: -0.05,
    radius: isMobile ? 44 : 64,
    pitch: 3.4,
    basePairs: primaryBp,
    rotationSpeed: 0.00048,
    waveSpeed: 0.0007,
    waveFreq: 2.2,
    waveAmp: isMobile ? 10 : 16,
    opacity: 0.70,
    scale: 1.0,
    isPrimary: true,
    rotAngle: 0,
    wavePhase: 0
  })

  // 2. Primary Strand B (Lower Half - Dynamic Holographic Double Helix)
  strands.push({
    centerYRatio: 0.72,
    startXRatio: -0.06,
    endXRatio: 1.06,
    tilt: 0.045,
    radius: isMobile ? 38 : 58,
    pitch: 3.1,
    basePairs: Math.round(primaryBp * 0.9),
    rotationSpeed: 0.00044,
    waveSpeed: 0.00065,
    waveFreq: 2.0,
    waveAmp: isMobile ? 10 : 15,
    opacity: 0.65,
    scale: 0.95,
    isPrimary: true,
    rotAngle: Math.PI * 0.6,
    wavePhase: 1.5
  })

  // 3-6. Secondary Deeper Micro Strands (Layered Depth)
  const microDefs = [
    { cy: 0.14, sx: 0.04, ex: 0.60, tilt: 0.02, rad: 26, pitch: 2.2, speed: 0.00028, op: 0.28, scale: 0.44 },
    { cy: 0.50, sx: 0.42, ex: 0.98, tilt: -0.03, rad: 28, pitch: 2.4, speed: 0.00025, op: 0.32, scale: 0.46 },
    { cy: 0.88, sx: 0.12, ex: 0.68, tilt: -0.02, rad: 24, pitch: 2.0, speed: 0.00024, op: 0.26, scale: 0.40 },
    { cy: 0.42, sx: -0.02, ex: 0.46, tilt: 0.04, rad: 25, pitch: 2.1, speed: 0.00026, op: 0.28, scale: 0.42 }
  ]

  // If mobile, keep 2 micro strands for performance
  const microCount = isMobile ? 2 : microDefs.length
  for (let i = 0; i < microCount; i++) {
    const m = microDefs[i]
    strands.push({
      centerYRatio: m.cy,
      startXRatio: m.sx,
      endXRatio: m.ex,
      tilt: m.tilt,
      radius: m.rad,
      pitch: m.pitch,
      basePairs: microBp,
      rotationSpeed: m.speed,
      waveSpeed: 0.0004,
      waveFreq: 1.8,
      waveAmp: 8,
      opacity: m.op,
      scale: m.scale,
      isPrimary: false,
      rotAngle: i * 1.2,
      wavePhase: i * 0.8
    })
  }

  // Build Constellation Lattice and Sparkle Particles for each strand
  for (let sIdx = 0; sIdx < strands.length; sIdx++) {
    const s = strands[sIdx]
    const cNodes: ConstellationNode[] = []
    const sparkles: SparkleParticle[] = []

    if (s.isPrimary) {
      // Molecular constellation points clustered around the strand
      for (let k = 0; k < constCount; k++) {
        cNodes.push({
          bpIndex: Math.floor((k / constCount) * s.basePairs),
          offsetRadial: (Math.random() - 0.5) * s.radius * 1.6,
          offsetAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.0002 + Math.random() * 0.0003,
          x: 0,
          y: 0
        })
      }

      // Orbiting sparkles
      for (let p = 0; p < sparkleCount; p++) {
        sparkles.push({
          t: Math.random(),
          speed: 0.00003 + Math.random() * 0.00006,
          radialDist: s.radius * (0.8 + Math.random() * 0.9),
          orbitAngle: Math.random() * Math.PI * 2,
          orbitSpeed: 0.0008 + Math.random() * 0.0012,
          size: 1 + Math.random() * 2.2,
          flickerSpeed: 0.002 + Math.random() * 0.003,
          phase: Math.random() * Math.PI * 2
        })
      }
    }

    strandConstellations.push(cNodes)
    strandSparkles.push(sparkles)
  }
}

// ─── Handle Resize ───────────────────────────────────────────────────────────
function handleResize(): void {
  const canvas = canvasRef.value
  if (!canvas) return

  const W = window.innerWidth
  const H = window.innerHeight
  isMobile = W < 768 || (navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 4)
  dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.1 : 1.35)

  canvas.width = Math.round(W * dpr)
  canvas.height = Math.round(H * dpr)
  canvas.style.width = `${W}px`
  canvas.style.height = `${H}px`

  initStrands()
  renderStaticCircuitCanvas(canvas.width, canvas.height)
}

// ─── Main Animation Loop (30 FPS Delta-Timed Guard) ─────────────────────────
function render(now: number): void {
  if (isPaused) return

  rafId = requestAnimationFrame(render)

  const dt = now - lastFrameTime
  if (dt < 1000 / 30) return // Lock to 30 FPS for silky performance and cool GPU
  lastFrameTime = now - (dt % (1000 / 30))

  const canvas = canvasRef.value
  if (!canvas || !ctx) return

  const W = canvas.width
  const H = canvas.height

  // 1. Clear Frame
  ctx.clearRect(0, 0, W, H)

  // 2. Draw Cached Static PCB Circuit Traces & Binary Layer (Zero per-frame cost)
  if (staticCircuitCanvas) {
    ctx.drawImage(staticCircuitCanvas, 0, 0)
  }

  // 3. Switch to Additive Blending for Authentic Holographic Neon Glow
  ctx.globalCompositeOperation = 'lighter'

  // 4. Render All DNA Strands
  for (let sIdx = 0; sIdx < strands.length; sIdx++) {
    const s = strands[sIdx]
    const bp = s.basePairs
    s.rotAngle += s.rotationSpeed * dt
    s.wavePhase += s.waveSpeed * dt

    const startX = s.startXRatio * W
    const endX = s.endXRatio * W
    const spanX = endX - startX
    const cy = s.centerYRatio * H
    const rad = s.radius * dpr
    const scale = s.scale

    // Arrays to store 3D node coordinates for this strand
    const nodesX: number[] = new Array(bp)
    const nodesY1: number[] = new Array(bp)
    const nodesZ1: number[] = new Array(bp)
    const nodesY2: number[] = new Array(bp)
    const nodesZ2: number[] = new Array(bp)

    for (let i = 0; i < bp; i++) {
      const t = i / (bp - 1)
      const x = startX + t * spanX
      const wave = Math.sin(t * s.waveFreq * Math.PI + s.wavePhase) * s.waveAmp * dpr
      const tiltOffset = (t - 0.5) * s.tilt * W
      const yCenter = cy + tiltOffset + wave

      const angle = t * s.pitch * Math.PI * 2 + s.rotAngle
      const sinA = Math.sin(angle)
      const cosA = Math.cos(angle)

      nodesX[i] = x
      nodesY1[i] = yCenter + sinA * rad
      nodesZ1[i] = cosA * rad
      nodesY2[i] = yCenter - sinA * rad
      nodesZ2[i] = -cosA * rad
    }

    // ─── A. Continuous Double-Helix Glowing Ribbons ───
    // Ribbon 1
    ctx.beginPath()
    ctx.moveTo(nodesX[0], nodesY1[0])
    for (let i = 1; i < bp; i++) {
      ctx.lineTo(nodesX[i], nodesY1[i])
    }
    ctx.strokeStyle = `rgba(0, 210, 255, ${s.opacity * 0.72})`
    ctx.lineWidth = 3.2 * dpr * scale
    ctx.stroke()

    // Inner bright core for Ribbon 1
    ctx.strokeStyle = `rgba(225, 245, 255, ${s.opacity * 0.85})`
    ctx.lineWidth = 1.3 * dpr * scale
    ctx.stroke()

    // Ribbon 2 (opposite phase)
    ctx.beginPath()
    ctx.moveTo(nodesX[0], nodesY2[0])
    for (let i = 1; i < bp; i++) {
      ctx.lineTo(nodesX[i], nodesY2[i])
    }
    ctx.strokeStyle = `rgba(0, 210, 255, ${s.opacity * 0.72})`
    ctx.lineWidth = 3.2 * dpr * scale
    ctx.stroke()

    // Inner bright core for Ribbon 2
    ctx.strokeStyle = `rgba(225, 245, 255, ${s.opacity * 0.85})`
    ctx.lineWidth = 1.3 * dpr * scale
    ctx.stroke()

    // ─── B. Base-Pair Rungs & Glowing Solder Nodes ───
    for (let i = 0; i < bp; i++) {
      const x = nodesX[i]
      const y1 = nodesY1[i]
      const y2 = nodesY2[i]
      const z1 = nodesZ1[i]
      const depth1 = (z1 / rad + 1) * 0.5 // 0 (back) to 1 (front)
      const depth2 = 1 - depth1

      // Connecting rung bar with split center gap
      const my = (y1 + y2) * 0.5
      ctx.strokeStyle = `rgba(0, 230, 255, ${s.opacity * 0.45})`
      ctx.lineWidth = 1.6 * dpr * scale
      ctx.beginPath()
      ctx.moveTo(x, y1)
      ctx.lineTo(x, y1 + (my - y1) * 0.88)
      ctx.moveTo(x, y2)
      ctx.lineTo(x, y2 + (my - y2) * 0.88)
      ctx.stroke()

      // Node on Strand 1
      if (cyanGlowSprite) {
        const spriteSize = Math.round((14 + depth1 * 18) * dpr * scale)
        const half = spriteSize * 0.5
        ctx.globalAlpha = s.opacity * (0.35 + depth1 * 0.65)
        ctx.drawImage(cyanGlowSprite, x - half, y1 - half, spriteSize, spriteSize)

        // Specular glint on front-facing nodes
        if (whiteGlowSprite && depth1 > 0.65) {
          const wSize = Math.round(12 * dpr * scale)
          ctx.globalAlpha = s.opacity * (depth1 - 0.4)
          ctx.drawImage(whiteGlowSprite, x - wSize * 0.5, y1 - wSize * 0.5, wSize, wSize)
        }
      }

      // Node on Strand 2
      if (cyanGlowSprite) {
        const spriteSize = Math.round((14 + depth2 * 18) * dpr * scale)
        const half = spriteSize * 0.5
        ctx.globalAlpha = s.opacity * (0.35 + depth2 * 0.65)
        ctx.drawImage(cyanGlowSprite, x - half, y2 - half, spriteSize, spriteSize)

        if (whiteGlowSprite && depth2 > 0.65) {
          const wSize = Math.round(12 * dpr * scale)
          ctx.globalAlpha = s.opacity * (depth2 - 0.4)
          ctx.drawImage(whiteGlowSprite, x - wSize * 0.5, y2 - wSize * 0.5, wSize, wSize)
        }
      }
    }

    // ─── C. Molecular Constellation Mesh (Polygonal cluster around primary strands) ───
    if (s.isPrimary) {
      const cNodes = strandConstellations[sIdx]
      if (cNodes) {
        // Update positions
        for (let k = 0; k < cNodes.length; k++) {
          const cn = cNodes[k]
          const bpIdx = Math.min(cn.bpIndex, bp - 1)
          const bx = nodesX[bpIdx]
          const by = (nodesY1[bpIdx] + nodesY2[bpIdx]) * 0.5
          cn.offsetAngle += cn.driftSpeed * dt
          cn.x = bx + Math.cos(cn.offsetAngle) * (rad + cn.offsetRadial)
          cn.y = by + Math.sin(cn.offsetAngle) * (rad + cn.offsetRadial)
        }

        // Connect nearby constellation nodes with delicate bonds
        ctx.strokeStyle = `rgba(0, 210, 255, ${s.opacity * 0.32})`
        ctx.lineWidth = 0.9 * dpr
        const maxDist = 70 * dpr
        for (let a = 0; a < cNodes.length; a++) {
          for (let b = a + 1; b < cNodes.length; b++) {
            const dx = cNodes[a].x - cNodes[b].x
            const dy = cNodes[a].y - cNodes[b].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < maxDist) {
              ctx.globalAlpha = (1 - dist / maxDist) * s.opacity * 0.45
              ctx.beginPath()
              ctx.moveTo(cNodes[a].x, cNodes[a].y)
              ctx.lineTo(cNodes[b].x, cNodes[b].y)
              ctx.stroke()
            }
          }

          // Draw small molecular dot at node
          if (whiteGlowSprite) {
            const dotSize = Math.round(8 * dpr)
            ctx.globalAlpha = s.opacity * 0.7
            ctx.drawImage(whiteGlowSprite, cNodes[a].x - dotSize * 0.5, cNodes[a].y - dotSize * 0.5, dotSize, dotSize)
          }
        }
      }

      // ─── D. Orbiting Stardust Particles ───
      const sparkles = strandSparkles[sIdx]
      if (sparkles && cyanGlowSprite) {
        for (let p = 0; p < sparkles.length; p++) {
          const sp = sparkles[p]
          sp.t = (sp.t + sp.speed * dt) % 1.0
          sp.orbitAngle += sp.orbitSpeed * dt
          sp.phase += sp.flickerSpeed * dt

          const bpIdx = Math.floor(sp.t * (bp - 1))
          const bx = nodesX[bpIdx]
          const by = (nodesY1[bpIdx] + nodesY2[bpIdx]) * 0.5

          const px = bx + Math.cos(sp.orbitAngle) * sp.radialDist * dpr
          const py = by + Math.sin(sp.orbitAngle) * sp.radialDist * dpr

          const flicker = 0.4 + 0.6 * Math.sin(sp.phase)
          const pSize = Math.round((sp.size + flicker * 2) * dpr)
          ctx.globalAlpha = s.opacity * flicker * 0.75
          ctx.drawImage(cyanGlowSprite, px - pSize * 0.5, py - pSize * 0.5, pSize, pSize)
        }
      }
    }
  }

  // Restore composite operation and alpha
  ctx.globalCompositeOperation = 'source-over'
  ctx.globalAlpha = 1
}

// ─── Page Visibility & Tab Sleeping ─────────────────────────────────────────
function onVisibilityChange(): void {
  if (document.hidden) {
    isPaused = true
    if (rafId) cancelAnimationFrame(rafId)
  } else {
    isPaused = false
    lastFrameTime = performance.now()
    rafId = requestAnimationFrame(render)
  }
}

// ─── Debounced Resize Listener ──────────────────────────────────────────────
let resizeTimer: number | null = null
function onWindowResize(): void {
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = window.setTimeout(() => {
    handleResize()
  }, 120)
}

// ─── Lifecycle Setup ────────────────────────────────────────────────────────
onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  ctx = canvas.getContext('2d')
  buildSprites()

  // Non-blocking initial paint: Defer initialization with requestIdleCallback or setTimeout
  const startInit = () => {
    handleResize()
    window.addEventListener('resize', onWindowResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    isPaused = false
    lastFrameTime = performance.now()
    rafId = requestAnimationFrame(render)

    // Fade in smoothly once initialized
    isLoaded.value = true
  }

  if ('requestIdleCallback' in window) {
    ;(window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(startInit)
  } else {
    setTimeout(startInit, 120)
  }
})

onUnmounted(() => {
  isPaused = true
  if (rafId) cancelAnimationFrame(rafId)
  if (resizeTimer) clearTimeout(resizeTimer)
  window.removeEventListener('resize', onWindowResize)
  document.removeEventListener('visibilitychange', onVisibilityChange)
  ctx = null
})
</script>
