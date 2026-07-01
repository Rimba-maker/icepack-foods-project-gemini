/**
 * IcePack Foods — Shared Framer Motion Animations
 * PRD Animation Spec + Hybrid Design System
 *
 * Vibe: Appetizing & professional
 * Warm for B2C (bikin lapar), clean & efficient for B2B
 */

import type { Variants, Transition } from "framer-motion";

/* ─── Transitions ─── */
export const smoothEase: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

/* ─── Scroll Reveal (PRD: foodFade) ─── */
export const foodFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Hero Reveal (PRD: foodReveal) ─── */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 },
  },
};

export const heroChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ─── Stagger Container ─── */
export const staggerContainer = (staggerDelay = 0.07): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerDelay },
  },
});

/* ─── Card Reveal (stagger child) ─── */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Left/Right Alternating Reveal ─── */
export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Scale Pop (icons, badges) ─── */
export const scalePop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ─── Counter Animation Hook ─── */
export function useCounter(end: number, duration = 2000) {
  // Use in React components with useEffect
  return { end, duration };
}

/* ─── Ken Burns (Hero food photography) ─── */
export const appetizingKenBurns = {
  scale: [1, 1.05],
  transition: {
    duration: 15,
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

/* ─── Hover Effects ─── */
export const cardHover = {
  y: -4,
  transition: { duration: 0.3, ease: "easeOut" },
};

export const imageHover = {
  scale: 1.08,
  transition: { duration: 0.4, ease: "easeOut" },
};
