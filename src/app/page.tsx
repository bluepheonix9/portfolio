import { Beyond } from "@/components/beyond";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/motion-primitives";
import { Nav } from "@/components/nav";
import { About } from "@/components/about";
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

        <Section id="about" eyebrow="01 — Who" title="A short version">
          <About />
        </Section>

        <Section
          id="work"
          eyebrow="02 — Work"
          title="Things I've built"
          lead="Things I've taken from a rough idea to something people can actually open and use."
        >
          <Projects />
        </Section>

        <Section
          id="research"
          eyebrow="03 — Research"
          title="What I'm researching"
          lead="Learning software by drawing it out, not just typing it in."
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
          lead="The societies, volunteering and teams I've ended up spending my time with."
        >
          <Timeline chapters={community} />
        </Section>

        <Section
          id="education"
          eyebrow="06 — Education"
          title="Where I've studied"
          lead="Bangkok to Auckland to Sydney."
        >
          <Timeline chapters={education} />
        </Section>

        <Section
          id="stack"
          eyebrow="07 — Tools"
          title="What I reach for"
          lead="The tools I've spent enough time with to have opinions about them."
        >
          <Stack />
        </Section>

        <Section
          id="beyond"
          eyebrow="08 — Beyond code"
          title="The other half"
          lead="I'd be a pretty boring engineer if this was all I did. Here's the rest of it: music, sport, languages, travel and volunteering."
        >
          <Beyond />
        </Section>

        <Section
          id="travel"
          eyebrow="09 — Travel"
          title="Where I've been"
          lead="Bangkok to Auckland to Sydney, with quite a few stops in between. Hover over a country for the story. The faded ones are the places I'm hoping to get to next."
        >
          <Reveal>
            <TravelMap world={world} />
          </Reveal>
        </Section>

        <Section
          id="contact"
          eyebrow="10 — Contact"
          title="Let's build something"
          lead="Hiring, collaborating, or just want to talk about something you've seen here? My inbox is open."
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
          <span>Built with Next.js, Tailwind and probably too much coffee.</span>
        </div>
      </footer>
    </>
  );
}
