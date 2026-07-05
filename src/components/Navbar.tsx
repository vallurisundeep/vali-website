"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-slate-200 bg-white/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Vali LLC home">
          <Logo dark={!solid} />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors",
                solid ? "text-slate-600 hover:text-ink" : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="/quote" className="!px-5 !py-2.5">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={clsx(
            "flex size-10 items-center justify-center rounded-full lg:hidden",
            solid ? "text-ink" : "text-white",
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/quote" onClick={() => setOpen(false)} className="mt-2 w-full">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
