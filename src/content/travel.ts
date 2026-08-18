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
  /** Optional caption for the tooltip. Currently unused — names only. */
  note?: string;
};

/** Countries I've set foot in. */
export const visited: Place[] = [
  { country: "Thailand" },
  { country: "Laos" },
  { country: "Cambodia" },
  { country: "Myanmar" },
  { country: "Vietnam" },
  { country: "Philippines" },
  { country: "Singapore" },
  { country: "Malaysia" },
  { country: "China" },
  { country: "Hong Kong" },
  { country: "Japan" },
  { country: "Australia" },
  { country: "New Zealand" },
  { country: "England" },
  { country: "Austria" },
  { country: "Italy" },
  { country: "Norway" },
];

/** Countries still on the list. */
export const wishlist: Place[] = [
  { country: "Peru" },
  { country: "Chile" },
  { country: "Mexico" },
  { country: "Switzerland" },
  { country: "Kyrgyzstan" },
  { country: "Jordan" },
  { country: "Kenya" },
  { country: "Egypt" },
  { country: "Canada" },
];
