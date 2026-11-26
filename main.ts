// Charm the Commuter: Forecast a City That Isn't — make.fun entry
// u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
//
// DRAFT: one line of weather, 140 characters at most, for a city that
// does not exist — invented city named, weather the whole point, and a
// small joke for a bored commuter at a rainy bus stop.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "Good morning, Drizzlewick: drizzle till noon, then drizzle with ambition. 11°C, puddles 4 cm deep — buses on time for once, commuters.";

// The gate allows 1 to 140 characters; refuse to write anything outside it.
if (FORECAST.length < 1 || FORECAST.length > 140 || FORECAST.trim().length === 0) {
  throw new Error(`forecast is ${FORECAST.length} characters, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORECAST, "utf8");
