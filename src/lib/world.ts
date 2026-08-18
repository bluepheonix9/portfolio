import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology } from "topojson-specification";
import topology from "world-atlas/countries-110m.json";
import { visited, wishlist, type Place } from "@/content/travel";

export const MAP_WIDTH = 1000;
export const MAP_HEIGHT = 500;

/** Common names people write that Natural Earth spells differently. */
const ALIASES: Record<string, string> = {
  "usa": "United States of America",
  "united states": "United States of America",
  "uk": "United Kingdom",
  "england": "United Kingdom",
  "scotland": "United Kingdom",
  "wales": "United Kingdom",
  "great britain": "United Kingdom",
  "south korea": "Republic of Korea",
  "north korea": "Dem. Rep. Korea",
  "czech republic": "Czechia",
  "uae": "United Arab Emirates",
  "vatican": "Vatican City",
  "bosnia": "Bosnia and Herz.",
  "drc": "Dem. Rep. Congo",
};

/**
 * Countries too small to exist in the 110m geometry. They still get a dot,
 * placed from these coordinates. Add to this list if you mark a micro-state.
 */
const SMALL_COUNTRY_POINTS: Record<string, [number, number]> = {
  "Singapore": [103.82, 1.35],
  "Hong Kong": [114.17, 22.32],
  "Malta": [14.38, 35.9],
  "Monaco": [7.42, 43.73],
  "Bahrain": [50.55, 26.07],
  "Vatican City": [12.45, 41.9],
  "Andorra": [1.52, 42.5],
  "Liechtenstein": [9.55, 47.17],
  "Mauritius": [57.55, -20.35],
  "Maldives": [73.51, 4.18],
};

const canonical = (name: string) =>
  ALIASES[name.trim().toLowerCase()] ?? name.trim();

export type CountryShape = {
  id: string;
  name: string;
  d: string;
  status: "visited" | "wishlist" | "none";
  note?: string;
};

export type CountryDot = {
  name: string;
  x: number;
  y: number;
  status: "visited" | "wishlist";
  note?: string;
};

export type WorldMap = {
  shapes: CountryShape[];
  dots: CountryDot[];
  visitedCount: number;
  wishlistCount: number;
  /** Names in travel.ts that couldn't be matched to a country. */
  unmatched: string[];
};

/** Projects the world once, at module load, and tags each country. */
export function buildWorldMap(): WorldMap {
  const collection = feature(
    topology as unknown as Topology,
    (topology as unknown as Topology).objects.countries,
  ) as unknown as FeatureCollection<Geometry, { name: string }>;

  const projection = geoNaturalEarth1().fitSize(
    [MAP_WIDTH, MAP_HEIGHT],
    collection as unknown as GeoPermissibleObjects,
  );
  const path = geoPath(projection);

  const lookup = new Map<string, Place & { status: "visited" | "wishlist" }>();
  for (const place of visited) {
    lookup.set(canonical(place.country), { ...place, status: "visited" });
  }
  for (const place of wishlist) {
    lookup.set(canonical(place.country), { ...place, status: "wishlist" });
  }

  const shapes: CountryShape[] = [];
  const dots: CountryDot[] = [];
  const matched = new Set<string>();

  for (const country of collection.features) {
    const name = country.properties.name;
    const marked = lookup.get(name);
    const d = path(country);
    if (!d) continue;

    if (marked) matched.add(name);

    shapes.push({
      id: String(country.id ?? name),
      name,
      // Trim coordinate precision — halves the markup with no visible change.
      d: d.replace(/\d+\.\d+/g, (n) => Number(n).toFixed(1)),
      status: marked?.status ?? "none",
      note: marked?.note,
    });

    if (marked) {
      const centroid = path.centroid(country);
      if (Number.isFinite(centroid[0])) {
        dots.push({
          name,
          x: centroid[0],
          y: centroid[1],
          status: marked.status,
          note: marked.note,
        });
      }
    }
  }

  // Micro-states: no shape to fill, so place their dot by hand.
  const unmatched: string[] = [];
  for (const [name, place] of lookup) {
    if (matched.has(name)) continue;

    const point = SMALL_COUNTRY_POINTS[name];
    const projected = point ? projection(point) : null;

    if (projected) {
      dots.push({
        name,
        x: projected[0],
        y: projected[1],
        status: place.status,
        note: place.note,
      });
    } else {
      unmatched.push(name);
    }
  }

  return {
    shapes,
    dots,
    visitedCount: visited.length,
    wishlistCount: wishlist.length,
    unmatched,
  };
}
