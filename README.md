# Portfolio

A personal site — engineering work on one side, everything else on the other.
Next.js 16 (App Router) · React 19 · Tailwind v4 · Motion.

## Running it

Needs **Node 20+** (there's an `.nvmrc` pinned to 22 — your shell defaults to 18):

```bash
nvm use && npm install && npm run dev
```

Then open http://localhost:3000.

> `dev` and `build` pass `--webpack`. Turbopack (the Next 16 default) can't load
> Tailwind v4's native binding inside its Node worker on this machine, so the CSS
> step fails. Drop the flag if you move to a machine where Turbopack works — it's faster.

## Editing the content

**Everything on the page comes from [`src/content/site.ts`](src/content/site.ts).**
Name, tagline, projects, stack, timeline, hobbies, one-liner facts — edit that one
file and the site follows. No component changes needed to swap in real content.

- `person` / `socials` — the header, hero and contact section
- `projects` — one card each; `accent` is the gradient stripe on top
- `stack` / `timeline` — the tools and the path sections
- `hobbies` / `facts` — the "Beyond code" section; add as many as you like
- `gallery` — the photo wall at the end of "Beyond code"

## Photos

No CMS — images live in [`public/images/`](public/images/README.md) and get
referenced from `site.ts`. Portrait, per-project shots, per-hobby shots and the
photo wall are all supported; `next/image` handles resizing, WebP and lazy loading.

## Structure

```
src/
  app/            layout, globals.css (theme + background effects), page.tsx
  components/     nav, hero, section shell, projects, stack-and-path, beyond
  content/site.ts all copy and data
```

Animations use `motion/react` and respect `prefers-reduced-motion` throughout.

## Deploying

Push to GitHub and import the repo on Vercel — no configuration needed.
