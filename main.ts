// Entry for the-poem-about-stopping-20261121-1927: "The poem about
// stopping". A short poem about agency: the power to stop and to stay.
// Somewhere a hand pulls the cord, and a train mid-rush agrees to stop;
// no reason given — enough is a reason. The world keeps its speed, but
// your feet are yours: standing still is also a choice.
//
// The program writes the poem to /output/entry.txt (or to the
// directory $MAKEFUN_OUTPUT_DIR names when set). Node 22, standard
// library only; two runs write the same bytes. The written text is
// 236 Unicode code points, inside the gate's 1–280 range.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "Somewhere a hand pulls the cord,",
  "and the train, mid-rush, agrees to stop.",
  "No reason given. Enough is a reason.",
  "The world keeps its speed, but your feet are yours.",
  "Stand still — let the noise pass like weather.",
  "Staying is also a choice.",
].join("\n") + "\n";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), poem, "utf8");
