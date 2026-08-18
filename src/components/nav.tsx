"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { person } from "@/content/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Beyond code", href: "#beyond" },
  { label: "Travel", href: "#travel" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [stuck, setStuck] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setStuck(y > 24));

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          stuck
            ? "border border-line bg-black/50 backdrop-blur-xl"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="font-mono text-sm tracking-tight">
          {person.handle}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${person.email}`}
          className="rounded-full border border-line px-4 py-1.5 text-sm transition hover:border-white/25 hover:bg-white/5"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
