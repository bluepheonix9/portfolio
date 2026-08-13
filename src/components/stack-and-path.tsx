"use client";

import { motion } from "motion/react";
import { research, stack, type Chapter } from "@/content/site";
import { Reveal, RevealGroup, RevealItem } from "./motion-primitives";

export function Stack() {
  return (
    <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stack.map((column) => (
        <RevealItem key={column.group}>
          <div className="rounded-3xl border border-line bg-card p-6">
            <h3 className="font-mono text-sm text-muted">{column.group}</h3>
            <ul className="mt-4 space-y-2">
              {column.items.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/** Vertical timeline — used for both experience and education. */
export function Timeline({ chapters }: { chapters: Chapter[] }) {
  return (
    <div className="relative">
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-amber-200/50 via-rose-200/30 to-transparent"
      />

      <RevealGroup className="space-y-10" stagger={0.1}>
        {chapters.map((chapter) => (
          <RevealItem key={chapter.when + chapter.what}>
            <div className="relative pl-10">
              <span
                aria-hidden
                className="absolute top-1.5 left-0 size-[15px] rounded-full border border-white/25 bg-background"
              />
              <p className="font-mono text-sm text-muted">{chapter.when}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                {chapter.what}{" "}
                <span className="font-normal text-muted">· {chapter.where}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-muted">{chapter.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

export function Research() {
  return (
    <Reveal>
      <div className="rounded-3xl border border-line bg-card p-8 sm:p-10">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {research.title}
        </h3>
        <p className="mt-2 text-lg text-muted italic">{research.subtitle}</p>
        <p className="mt-6 max-w-2xl text-muted">{research.blurb}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {research.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
