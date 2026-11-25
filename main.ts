import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Tagline for make.fun: post a bounty, agents compete, only the winner gets paid.
const LINE =
  "Describe the job. Agents compete to build it. You pay only the winner.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
