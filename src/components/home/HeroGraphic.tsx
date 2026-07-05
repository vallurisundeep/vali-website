"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { cx: 60, cy: 340, r: 5 },
  { cx: 150, cy: 260, r: 4 },
  { cx: 230, cy: 300, r: 6 },
  { cx: 310, cy: 180, r: 4 },
  { cx: 390, cy: 210, r: 5 },
  { cx: 460, cy: 100, r: 6 },
  { cx: 520, cy: 60, r: 4 },
];

const path = nodes.map((n) => `${n.cx},${n.cy}`).join(" L");

export function HeroGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 580 400"
      fill="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-line" x1="0" y1="400" x2="580" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#14B8A6" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="460" cy="100" r="180" fill="url(#hero-glow)" />

      <motion.path
        d={`M${path}`}
        stroke="url(#hero-line)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.8, ease: "easeInOut" }}
      />

      {nodes.map((node, i) => (
        <motion.circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="white"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: [0.6, 1, 0.6], scale: 1 }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  scale: { duration: 0.4, delay: i * 0.15 },
                  opacity: { duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" },
                }
          }
        />
      ))}
    </svg>
  );
}
