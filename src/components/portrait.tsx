import Image from "next/image";
import { person } from "@/content/site";
import { Reveal } from "./motion-primitives";

/** Renders nothing until you set person.portrait in site.ts. */
export function Portrait() {
  if (!person.portrait) return null;

  return (
    <Reveal>
      <div className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-3xl border border-line">
        <Image
          src={person.portrait}
          alt={person.portraitAlt}
          fill
          sizes="20rem"
          priority
          className="object-cover"
        />
      </div>
    </Reveal>
  );
}
