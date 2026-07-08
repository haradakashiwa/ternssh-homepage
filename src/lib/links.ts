export const LINKS = {
  github: "https://github.com/HaradaKashiwa/ternssh",
  docsHome: "/docs/home",
  docsDeploy: "/docs/deployment",
  deploy:
    "https://deploy.workers.cloudflare.com/?url=https://github.com/haradakashiwa/ternssh-cloudflare-workers-template",
  preview:
    "https://raw.githubusercontent.com/HaradaKashiwa/ternssh/refs/heads/main/docs/preview.png",
} as const;

export function docsPath(slug: string): string {
  return `/docs/${slug}`;
}
