# Photos

Drop image files in this folder, then reference them from `src/content/site.ts`
as `/images/<filename>`. No CMS, no upload step — the files are committed to the
repo and served from the CDN.

## Where photos can go

| Where | Field in `site.ts` |
| --- | --- |
| About section portrait | `person.portrait` |
| A project card | `image` / `imageAlt` on that project |
| A hobby card | `image` / `imageAlt` on that hobby |
| The photo wall | add an entry to `gallery` |

Gallery entries take a `shape` of `"square"` (default), `"tall"`, or `"wide"` —
mix them so the grid doesn't look like a spreadsheet.

```ts
export const gallery: Photo[] = [
  {
    src: "/images/band.jpg",
    alt: "Playing bass with Could Be Tuesday",
    caption: "Could Be Tuesday, somewhere loud",
    shape: "wide",
  },
];
```

## Before you commit a photo

- **Resize it.** Anything wider than ~2000px is wasted; phone photos are often 4000px+.
- **Name it for what it is** — `futsal-final.jpg`, not `IMG_4821.jpg`.
- **Write a real `alt`.** It's what screen readers announce, and it's the caption
  Google reads.
- JPEG for photos, PNG only for screenshots with text in them.

`next/image` handles the rest: resizing per device, WebP conversion, and lazy
loading everything below the fold.
