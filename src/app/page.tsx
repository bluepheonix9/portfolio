import { Beyond } from "@/components/beyond";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/motion-primitives";
import { Nav } from "@/components/nav";
import { Portrait } from "@/components/portrait";
import { Projects } from "@/components/projects";
import { Section } from "@/components/section";
import { Research, Stack, Timeline } from "@/components/stack-and-path";
import { TravelMap } from "@/components/travel-map";
import { community, education, experience, person, socials } from "@/content/site";
import { buildWorldMap } from "@/lib/world";

export default function Home() {
  const world = buildWorldMap();

  if (process.env.NODE_ENV !== "production" && world.unmatched.length > 0) {
    console.warn(
      `[travel map] couldn't place: ${world.unmatched.join(", ")} — check the spelling in src/content/travel.ts`,
    );
  }

  return (
    <>
      <div className="aurora" aria-hidden />
      <div className="grain" aria-hidden />

      <Nav />

      <main>
        <Hero />

        <Section id="about" eyebrow="01 — Who" title="A short version" lead={person.intro}>
          <Portrait />
        </Section>

        <Section
          id="work"
          eyebrow="02 — Work"
          title="Things I've built"
          lead="Products I took from an idea to something real people can open."
        >
          <Projects />
        </Section>

        <Section
          id="research"
          eyebrow="03 — Research"
          title="What I'm researching"
          lead="Software you learn by drawing, not by typing."
        >
          <Research />
        </Section>

        <Section
          id="experience"
          eyebrow="04 — Experience"
          title="Where I've worked"
        >
          <Timeline chapters={experience} />
        </Section>

        <Section
          id="community"
          eyebrow="05 — Community"
          title="Where I show up"
          lead="Societies, volunteering and the teams I build things with for free."
        >
          <Timeline chapters={community} />
        </Section>

        <Section
          id="education"
          eyebrow="06 — Education"
          title="Where I studied"
          lead="Bangkok to Auckland to Sydney."
        >
          <Timeline chapters={education} />
        </Section>

        <Section
          id="stack"
          eyebrow="07 — Tools"
          title="What I reach for"
          lead="The tools I know well enough to be opinionated about."
        >
          <Stack />
        </Section>

        <Section
          id="beyond"
          eyebrow="08 — Beyond code"
          title="The other half"
          lead="I'd be a pretty boring engineer if this was all I did. Here's everything else — the band, the pitch, the languages, the volunteering."
        >
          <Beyond />
        </Section>

        <Section
          id="travel"
          eyebrow="09 — Travel"
          title="Where I've been"
          lead="Bangkok to Auckland to Sydney, and everywhere I could get to in between. Hover a country for the story; the faded ones are still on the list."
        >
          <Reveal>
            <TravelMap world={world} />
          </Reveal>
        </Section>

        <Section
          id="contact"
          eyebrow="10 — Contact"
          title="Let's build something"
          lead="Hiring, collaborating, or just want to talk about any of the above — my inbox is open."
        >
          <Reveal>
            <a
              href={`mailto:${person.email}`}
              className="inline-block text-2xl font-semibold tracking-tight break-all sm:text-4xl"
            >
              <span className="gradient-text">{person.email}</span>
            </a>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
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
            </ul>
          </Reveal>
        </Section>
      </main>

      <footer className="border-t border-line px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 font-mono text-sm text-muted">
          <span>
            © {new Date().getFullYear()} {person.name}
          </span>
          <span>Built with Next.js, Tailwind and too much coffee.</span>
        </div>
      </footer>
    </>
  );
}
