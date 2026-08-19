"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { facts, hobbies } from "@/content/site";
import { RevealGroup, RevealItem } from "./motion-primitives";

export function Beyond() {
  const still = useReducedMotion();

  return (
    <>
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((hobby) => (
          <RevealItem key={hobby.title} className="h-full">
            <motion.article
              whileHover={still ? undefined : { y: -6, rotate: -0.4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card transition-colors hover:border-white/20"
            >
              {hobby.image ? (
                <div
                  className={`relative w-full overflow-hidden ${
                    hobby.imagePortrait ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={hobby.image}
                    alt={hobby.imageAlt ?? hobby.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : null}

              <div className="flex flex-1 flex-col p-6">
              <span className="text-3xl" aria-hidden>
                {hobby.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{hobby.title}</h3>
              <p className="mt-2 text-sm text-muted">{hobby.blurb}</p>

              </div>
            </motion.article>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup className="mt-16 grid gap-3 sm:grid-cols-2">
        {facts.map((fact) => (
          <RevealItem key={fact}>
            <p className="rounded-2xl border border-line/60 px-5 py-4 text-sm text-muted">
              <span className="mr-2 text-foreground" aria-hidden>
                —
              </span>
              {fact}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
