import type { Variants } from 'framer-motion'

// Shared, restrained motion primitives. Everything here is meant to read as
// "subtle acknowledgment," not as a feature - short duration, small distance,
// no bounce/spring theatrics.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
})

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export const viewportOnce = { once: true, margin: '-80px' }
