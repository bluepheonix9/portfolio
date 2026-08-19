import Image from "next/image";
import { person } from "@/content/site";
import { Reveal } from "./motion-primitives";

/** Text on the left, portrait on the right; stacked on small screens. */
export function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
      <Reveal className="space-y-5">
        <p className="text-lg text-muted">{person.intro}</p>
        {person.introMore.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-muted">
            {paragraph}
          </p>
        ))}
      </Reveal>

      {person.portrait ? (
        <Reveal delay={0.1}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line lg:sticky lg:top-28">
            <Image
              src={person.portrait}
              alt={person.portraitAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 24rem"
              className="object-cover"
            />
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
