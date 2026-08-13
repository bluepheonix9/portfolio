"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { gallery } from "@/content/site";
import { RevealGroup, RevealItem } from "./motion-primitives";

const shapeClass = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/10]",
  square: "aspect-square",
} as const;

export function Gallery() {
  const still = useReducedMotion();

  if (gallery.length === 0) return null;

  return (
    <RevealGroup className="grid auto-rows-auto grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {gallery.map((photo) => (
        <RevealItem
          key={photo.src}
          className={shapeClass[photo.shape ?? "square"]}
        >
          <motion.figure
            whileHover={still ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-full w-full overflow-hidden rounded-2xl border border-line bg-card"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {photo.caption ? (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            ) : null}
          </motion.figure>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
