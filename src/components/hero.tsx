"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { person, socials } from "@/content/site";

const line = {
  hidden: { opacity: 0, y: 28 },
  shown: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const still = useReducedMotion();
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 400], [1, 0]);
  const lift = useTransform(scrollY, [0, 400], [0, -60]);

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-center px-6 pt-28 pb-20"
    >
      <motion.div
        style={still ? undefined : { opacity: fade, y: lift }}
        className="mx-auto w-full max-w-5xl"
      >
        <motion.p
          custom={0}
          initial={still ? false : "hidden"}
          animate="shown"
          variants={line}
          className="font-mono text-sm text-muted"
        >
          {person.location} · available for work
        </motion.p>

        <motion.h1
          custom={1}
          initial={still ? false : "hidden"}
          animate="shown"
          variants={line}
          className="mt-6 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-tight"
        >
          {person.name}
          <span className="block gradient-text">{person.role}</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial={still ? false : "hidden"}
          animate="shown"
          variants={line}
          className="mt-8 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {person.tagline}
        </motion.p>

        <motion.div
          custom={3}
          initial={still ? false : "hidden"}
          animate="shown"
          variants={line}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85"
          >
            See the work
          </a>
          <a
            href="#beyond"
            className="rounded-full border border-line px-6 py-3 text-sm transition hover:border-white/25 hover:bg-white/5"
          >
            And everything else
          </a>
        </motion.div>

        <motion.ul
          custom={4}
          initial={still ? false : "hidden"}
          animate="shown"
          variants={line}
          className="mt-14 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted"
        >
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="transition hover:text-foreground"
              >
                {social.label} ↗
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
