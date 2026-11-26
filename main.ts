// One Line, One Laugh — make.fun entry.
// A deterministic program: writes a single funny line (<=140 chars)
// to /output/entry.txt and exits 0. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I told my smartwatch I wanted to get in shape, so it started counting my trips to the fridge as cardio.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
