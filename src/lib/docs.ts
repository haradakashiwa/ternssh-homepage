import type { Locale } from "../i18n/messages";

export const DOC_PAGES = [
  "Home",
  "Features",
  "Tech-Stack",
  "Getting-Started",
  "Deployment",
  "Project-Structure",
  "Architecture",
  "Widgets",
  "API",
  "Database",
  "Settings",
  "Security",
  "Configuration",
  "Roadmap",
  "License",
] as const;

export type DocPageName = (typeof DOC_PAGES)[number];

const rawModules = import.meta.glob("../../content/docs/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export function pageNameToSlug(name: string): string {
  return name.replace(/\.md$/i, "").toLowerCase();
}

export function slugToPageName(slug: string): DocPageName | null {
  const match = DOC_PAGES.find((page) => pageNameToSlug(page) === slug);
  return match ?? null;
}

export function isDocLocale(value: string): value is Locale {
  return value === "zh" || value === "en";
}

export function getDocContent(lang: Locale, slug: string): string | null {
  const page = slugToPageName(slug);
  if (!page) return null;
  const key = `../../content/docs/${lang}/${page}.md`;
  return rawModules[key] ?? null;
}

export function parseSidebar(raw: string): { slug: string; label: string }[] {
  return raw
    .split("\n")
    .filter((line) => line.startsWith("*"))
    .map((line) => {
      const match = line.match(/\*\s*\[([^\]]+)\]\(([^)]+)\)/);
      if (!match) return null;
      const [, label, page] = match;
      return { slug: pageNameToSlug(page), label };
    })
    .filter((item): item is { slug: string; label: string } => item !== null);
}

export const DOC_NAV: Record<Locale, { slug: string; label: string }[]> = {
  zh: parseSidebar(rawModules["../../content/docs/zh/_Sidebar.md"] ?? ""),
  en: parseSidebar(rawModules["../../content/docs/en/_Sidebar.md"] ?? ""),
};

export function stripDocHeader(content: string): string {
  return content.replace(/^(?:>[^\n]*\n)+\n?/, "");
}

export function resolveDocHref(
  href: string,
): { to?: string; href?: string; external?: boolean } {
  if (!href || href.startsWith("#")) {
    return { href };
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return { href, external: true };
  }

  if (href.includes("README.en.md")) {
    return {
      href: "https://github.com/HaradaKashiwa/ternssh/blob/main/README.en.md",
      external: true,
    };
  }

  if (href.includes("README.md")) {
    return {
      href: "https://github.com/HaradaKashiwa/ternssh/blob/main/README.md",
      external: true,
    };
  }

  if (href === "../README.md" || href === "README.md") {
    return { to: "/docs/home" };
  }

  const langFileMatch = href.match(
    /^(?:\.\.\/)*(zh|en)\/([^#?]+?)(\.md)?(#.*)?$/,
  );
  if (langFileMatch) {
    const [, , file, , anchor = ""] = langFileMatch;
    const slug = pageNameToSlug(file);
    if (slugToPageName(slug)) {
      return { to: `/docs/${slug}${anchor}` };
    }
  }

  const plainPageMatch = href.match(/^([A-Za-z][-A-Za-z0-9]*)(#.*)?$/);
  if (plainPageMatch) {
    const [, page, anchor = ""] = plainPageMatch;
    const slug = pageNameToSlug(page);
    if (slugToPageName(slug)) {
      return { to: `/docs/${slug}${anchor}` };
    }
  }

  return { href, external: true };
}
