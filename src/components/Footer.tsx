import { Link } from "react-router-dom";
import { LINKS } from "../lib/links";
import { useApp } from "../lib/app-context";

export function Footer() {
  const { t, resolvedTheme } = useApp();

  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-secondary)]/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <img
            src={
              resolvedTheme === "dark"
                ? "/logo-dark.png"
                : "/logo-light.png"
            }
            alt=""
            className="h-5 w-5 opacity-60"
            aria-hidden
          />
          <span className="text-xs text-[var(--color-muted-foreground)]">
            {t.footer.tagline}
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <Link
            to={LINKS.docsHome}
            className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
          >
            {t.footer.docs}
          </Link>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
          >
            {t.footer.github}
          </a>
          <Link
            to={LINKS.docsDeploy}
            className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
          >
            {t.footer.deploy}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
