/**
 * The travel map.
 *
 * Names must match Natural Earth's country names — the common ones people get
 * wrong are aliased in src/lib/world.ts ("USA", "UK", "South Korea", …), so
 * either spelling works. If a country doesn't light up, it's a name mismatch;
 * check the console warning in dev, which lists any name it couldn't place.
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
  { country: "Italy", note: "Summer school in Padova, 2025" },
  { country: "Malaysia", note: "Batu Caves" },
  { country: "Norway", note: "Sunset over Bergen" },
  // TODO: add the rest — this is only what I could confirm from your photos.
];

/** Countries still on the list. */
export const wishlist: Place[] = [
  { country: "Japan" },
  { country: "Spain", note: "Two years of Spanish to justify" },
  { country: "Peru" },
  // TODO: yours
];
