# DevNA Portfolio Website

A modern, professional portfolio website for DevNA - showcasing ready-made web applications built with Vue.js and Tailwind CSS.

## 🚀 Features

- **Modern SaaS-Style Design** - Clean, elegant UI inspired by Linear, Vercel, and TailwindUI
- **Fully Responsive** - Mobile-first design that works on all devices
- **5 Complete Pages**:
  - Home - Hero section, featured projects, features showcase
  - Projects - Filterable grid of all projects
  - Project Details - Individual project pages with features, pricing, and screenshots
  - About - Developer profile, skills, timeline, and stats
  - Contact - Contact form with WhatsApp integration
- **Reusable Components** - Navbar, Footer, Project Cards
- **Smooth Animations** - Hover effects, transitions, and scroll animations
- **Modern Tech Stack** - Vue 3, TypeScript, Tailwind CSS, Vue Router, Pinia

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (Blue)
- **Accent**: `#38bdf8` (Light Blue)
- **Dark**: `#0f172a` (Dark Blue)
- **Light**: `#f8fafc` (Off White)

### Typography
- **Font**: Inter (Google Fonts)
- **Style**: Bold headlines, clean body text

### Components
- Rounded corners: `rounded-2xl`
- Shadows: Multiple levels for depth
- Gradients: Subtle background effects
- Animations: Smooth transitions and hover effects

## 📦 Getting Started

```bash
# Navigate to project directory
cd devna-portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
