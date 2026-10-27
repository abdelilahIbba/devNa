/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module 'animejs' {
  export function animate(targets: any, parameters?: any): any
  export function stagger(value: any, options?: any): any
  const anime: any
  export default anime
}

interface CanvasRenderingContext2D {
  roundRect(x: number, y: number, w: number, h: number, radii?: number | number[]): void
}
