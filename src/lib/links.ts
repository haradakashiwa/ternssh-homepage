export const LINKS = {
  github: "https://github.com/HaradaKashiwa/ternssh",
  desktopRepo: "https://github.com/haradakashiwa/ternssh-desktop",
  desktopReleases: "https://github.com/haradakashiwa/ternssh-desktop/releases",
  desktopLatest:
    "https://github.com/haradakashiwa/ternssh-desktop/releases/latest",
  docsHome: "/docs/home",
  docsDeploy: "/docs/deployment",
  deploy:
    "https://deploy.workers.cloudflare.com/?url=https://github.com/haradakashiwa/ternssh-cloudflare-workers-template",
  dockerRun: `docker run -d --name ternssh -p 8787:8787 \\
  -v ternssh-data:/app/.wrangler \\
  --restart unless-stopped \\
  ghcr.io/haradakashiwa/ternssh:latest`,
} as const;

export function docsPath(slug: string): string {
  return `/docs/${slug}`;
}
