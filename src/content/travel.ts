/**
 * The travel map.
 *
 * Names must match Natural Earth's country names — the common ones people get
 * wrong are aliased in src/lib/world.ts ("USA", "UK", "England", …), so either
 * spelling works. If a country doesn't light up, it's a name mismatch; check
 * the dev console, which warns and lists anything it couldn't place.
 */

export type Place = {
  country: string;
  /** Optional — shown in the tooltip. Keep it to a few words. */
  note?: string;
};

/** Countries you've set foot in. */
export const visited: Place[] = [
  { country: "Thailand", note: "Born and raised — Bangkok" },
  { country: "Australia", note: "Home now — Sydney" },
  { country: "New Zealand", note: "High school in Auckland" },
  { country: "Laos" },
  { country: "Cambodia" },
  { country: "Myanmar" },
  { country: "Vietnam" },
  { country: "Philippines" },
  { country: "Singapore" },
  { country: "Malaysia", note: "Batu Caves" },
  { country: "China" },
  { country: "Hong Kong" },
  { country: "Japan" },
  { country: "England", note: "Shown as the United Kingdom" },
  { country: "Austria" },
  { country: "Norway", note: "Sunset over Bergen" },
  { country: "Italy", note: "Summer school in Padova, 2025" },
];

/** Countries still on the list. */
export const wishlist: Place[] = [
  // TODO: replace these — they're placeholders so the "Want to go" filter
  // has something to show.
  { country: "Spain", note: "Two years of Spanish to justify" },
  { country: "Peru" },
];
