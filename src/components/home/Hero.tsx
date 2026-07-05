"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroGraphic } from "@/components/home/HeroGraphic";

const TRUST_ITEMS = [
  "Founded 2006",
  "Plantation, FL",
  "Custom Software",
  "Cloud",
  "Data",
  "UX/UI",
  "QA",
  "Staff Augmentation",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-noise-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-40 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-wider text-accent-from"
          >
            IT Consulting &amp; Staffing · Since 2006
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient-accent">Grow together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300"
          >
            Vali LLC turns today&apos;s business-systems challenges into tomorrow&apos;s wins. We
            build custom software, modernize your cloud and data, and place vetted engineers on
            your team — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/quote">Get a Quote</Button>
            <Button href="/services" variant="ghost">
              Explore Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400"
          >
            {TRUST_ITEMS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden h-[400px] lg:block"
        >
          <HeroGraphic />
        </motion.div>
      </div>
    </section>
  );
}
