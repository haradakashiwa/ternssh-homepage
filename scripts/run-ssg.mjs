import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { generateStaticPages, SSG_SERVER_DIR } from "./ssg.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

console.log("[ssg] Building SSR entry...");
execSync(`vite build --ssr src/entry-server.tsx --outDir ${SSG_SERVER_DIR}`, {
  cwd: root,
  stdio: "inherit",
});

console.log("[ssg] Generating static HTML pages...");
await generateStaticPages();
