"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import type { WorldMap } from "@/lib/world";
import { MAP_HEIGHT, MAP_WIDTH } from "@/lib/world";

type Filter = "all" | "visited" | "wishlist";

const FILL = {
  visited: "fill-amber-300/70 hover:fill-amber-200/90",
  wishlist: "fill-teal-300/35 hover:fill-teal-200/60",
  none: "fill-white/[0.06] hover:fill-white/[0.12]",
} as const;

export function TravelMap({ world }: { world: WorldMap }) {
  const still = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<{
    name: string;
    note?: string;
    x: number;
    y: number;
  } | null>(null);

  const dimmed = (status: "visited" | "wishlist" | "none") =>
    filter !== "all" && status !== filter;

  const marked = useMemo(
    () =>
      world.dots
        .filter((dot) => filter === "all" || dot.status === filter)
        .sort((a, b) => a.name.localeCompare(b.name)),
    [world.dots, filter],
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex gap-2">
          {(
            [
              ["all", "Everywhere"],
              ["visited", "Been"],
              ["wishlist", "Want to go"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === value
                  ? "border-white/25 bg-white/10 text-foreground"
                  : "border-line text-muted hover:border-white/20 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <ul className="flex gap-5 font-mono text-sm text-muted">
          <li className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-amber-300" aria-hidden />
            {world.visitedCount} visited
          </li>
          <li className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-teal-300/60" aria-hidden />
            {world.wishlistCount} on the list
          </li>
        </ul>
      </div>

      <div className="relative mt-8 overflow-hidden rounded-3xl border border-line bg-card">
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="w-full"
          role="img"
          aria-label={`World map showing ${world.visitedCount} countries visited and ${world.wishlistCount} still on the list`}
          onMouseLeave={() => setHovered(null)}
        >
          <g>
            {world.shapes.map((shape) => (
              <path
                key={shape.id}
                d={shape.d}
                className={`${FILL[shape.status]} stroke-white/10 transition-[fill,opacity] duration-300 ${
                  dimmed(shape.status) ? "opacity-30" : "opacity-100"
                }`}
                strokeWidth={0.4}
                onMouseEnter={(event) => {
                  if (shape.status === "none") return;
                  const box = event.currentTarget.getBBox();
                  setHovered({
                    name: shape.name,
                    note: shape.note,
                    x: box.x + box.width / 2,
                    y: box.y,
                  });
                }}
              />
            ))}
          </g>

          <g>
            {world.dots.map((dot, index) => (
              <motion.circle
                key={dot.name}
                cx={dot.x}
                cy={dot.y}
                r={dot.status === "visited" ? 4 : 3}
                className={
                  dot.status === "visited"
                    ? "fill-amber-200 stroke-amber-500/40"
                    : "fill-teal-200/70 stroke-teal-400/30"
                }
                strokeWidth={1.5}
                initial={still ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  // Scattered but deterministic, so server and client agree.
                  delay: ((index * 37) % 13) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  opacity: dimmed(dot.status) ? 0.25 : 1,
                }}
                onMouseEnter={() =>
                  setHovered({ name: dot.name, note: dot.note, x: dot.x, y: dot.y })
                }
              />
            ))}
          </g>

          {hovered ? (
            <g
              transform={`translate(${hovered.x}, ${hovered.y - 12})`}
              className="pointer-events-none"
            >
              <text
                textAnchor="middle"
                className="fill-foreground text-[13px] font-medium"
                style={{ paintOrder: "stroke", stroke: "#14110f", strokeWidth: 4 }}
              >
                {hovered.name}
              </text>
              {hovered.note ? (
                <text
                  y={14}
                  textAnchor="middle"
                  className="fill-muted text-[11px]"
                  style={{ paintOrder: "stroke", stroke: "#14110f", strokeWidth: 4 }}
                >
                  {hovered.note}
                </text>
              ) : null}
            </g>
          ) : null}
        </svg>
      </div>

      {/* The same information without a mouse — and what small screens rely on. */}
      <ul className="mt-8 flex flex-wrap gap-2">
        {marked.map((place) => (
          <li key={place.name}>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
                place.status === "visited"
                  ? "border-amber-200/25 text-foreground"
                  : "border-teal-200/20 text-muted"
              }`}
            >
              <span
                className={`size-2 rounded-full ${
                  place.status === "visited" ? "bg-amber-300" : "bg-teal-300/60"
                }`}
                aria-hidden
              />
              {place.name}
              {place.note ? (
                <span className="text-muted">· {place.note}</span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
