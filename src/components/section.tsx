import type { ReactNode } from "react";
import { Reveal } from "./motion-primitives";

export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-muted">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {lead ? <p className="mt-4 max-w-2xl text-muted">{lead}</p> : null}
        </Reveal>

        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
