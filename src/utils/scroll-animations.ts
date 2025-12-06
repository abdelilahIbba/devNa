import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (selector: string, options?: any) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
          ...options?.scrollTrigger,
        },
        ...options?.gsap,
      }
    );
  });
};

export const createScrollReveal = (element: Element, staggerIndex = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: staggerIndex * 0.15,
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
};

export const parallaxScroll = (selector: string, speed = 0.5) => {
  gsap.to(selector, {
    yPercent: speed * 100,
    scrollTrigger: {
      trigger: selector,
      scrub: 1,
    },
  });
};

export const pinSection = (selector: string) => {
  gsap.to(selector, {
    scrollTrigger: {
      trigger: selector,
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
};

