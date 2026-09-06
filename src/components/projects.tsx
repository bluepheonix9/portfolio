"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { projects, type Project } from "@/content/site";
import { RevealGroup, RevealItem } from "./motion-primitives";

function ProjectCard({ project }: { project: Project }) {
  const still = useReducedMotion();
  const link = project.href ?? project.repo;

  return (
    <motion.div
      whileHover={still ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-line bg-card p-8 transition-colors duration-300 hover:border-foreground/20"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-medium tracking-tight">{project.title}</h3>
          {project.role ? (
            <p className="mt-1 font-mono text-sm text-muted">{project.role}</p>
          ) : null}
        </div>
        <span className="font-mono text-sm text-muted">{project.year}</span>
      </div>

      <p className="mt-4 max-w-2xl text-muted">{project.blurb}</p>

      {project.image ? (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-line">
          <Image
            src={project.image}
            alt={project.imageAlt ?? project.title}
            fill
            sizes="(max-width: 768px) 100vw, 60rem"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : null}

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>

      {link ? (
        <div className="mt-6 flex gap-5 font-mono text-sm">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              Live ↗
            </a>
          ) : null}
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition hover:text-foreground"
            >
              Source ↗
            </a>
          ) : null}
        </div>
      ) : null}
    </motion.div>
  );
}

export function Projects() {
  return (
    <RevealGroup className="grid gap-5">
      {projects.map((project) => (
        <RevealItem key={project.title}>
          <ProjectCard project={project} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
