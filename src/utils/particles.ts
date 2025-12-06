// tsParticles configuration - initialize in component when needed
export const particlesConfig = {
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: ['#38bdf8', '#2563eb', '#a855f7'],
    },
    links: {
      color: '#2563eb',
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.3,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export const initParticles = async (containerId: string) => {
  try {
    // @ts-ignore
    const { tsParticles } = await import('tsparticles-engine');
    // @ts-ignore
    const { loadSlim } = await import('tsparticles-slim');
    
    await loadSlim(tsParticles);
    return await tsParticles.load(containerId, particlesConfig);
  } catch (error) {
    console.warn('tsParticles initialization failed:', error);
    return null;
  }
};

