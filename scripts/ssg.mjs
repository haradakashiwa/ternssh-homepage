import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SSG_ROUTES } from "../ssg/routes.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");

/** SSR bundle output dir (build-time only, not deployed). */
export const SSG_SERVER_DIR = join(root, ".ssg");
export const SSG_SERVER_ENTRY = join(SSG_SERVER_DIR, "entry-server.js");

export async function generateStaticPages() {
  const template = readFileSync(join(distDir, "index.html"), "utf8");
  const { render } = await import(SSG_SERVER_ENTRY);

  for (const route of SSG_ROUTES) {
    const outFile = routeToFile(route);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, injectAppHtml(template, render(route)));
    console.log(`[ssg] ${route} -> ${outFile.replace(`${distDir}/`, "")}`);
  }

  const docsIndex = join(distDir, "docs", "index.html");
  mkdirSync(dirname(docsIndex), { recursive: true });
  writeFileSync(docsIndex, docsRedirectHtml);
  console.log("[ssg] /docs -> docs/index.html (redirect)");

  rmSync(SSG_SERVER_DIR, { recursive: true, force: true });
  console.log(`[ssg] Generated ${SSG_ROUTES.length + 1} static pages.`);
}

function routeToFile(route) {
  if (route === "/") return join(distDir, "index.html");
  return join(distDir, route.slice(1), "index.html");
}

function injectAppHtml(template, appHtml) {
  return template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  );
}

const docsRedirectHtml = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0;url=/docs/home" />
    <link rel="canonical" href="/docs/home" />
    <title>Redirecting…</title>
  </head>
  <body>
    <p>Redirecting to <a href="/docs/home">/docs/home</a>…</p>
  </body>
</html>
`;
