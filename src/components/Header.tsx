import { Link, useLocation } from "react-router-dom";
import { Github, Moon, Sun, Globe } from "lucide-react";
import { useApp } from "../lib/app-context";
import { LINKS } from "../lib/links";
import type { Locale } from "../i18n/messages";

export function Header() {
  const { t, locale, setLocale, resolvedTheme, toggleTheme } = useApp();
  const location = useLocation();

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/features", label: t.nav.features },
    { to: "/deploy", label: t.nav.deploy },
  ];

  const toggleLocale = () => {
    const next: Locale = locale === "zh" ? "en" : "zh";
    setLocale(next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] glass">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src={
                resolvedTheme === "dark"
                  ? "/logo-dark.png"
                  : "/logo-light.png"
              }
              alt="ternssh"
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold tracking-wide text-[var(--color-foreground)]">
              ternssh
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active =
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={[
                    "rounded-md px-3 py-1.5 text-sm transition-colors",
                    active
                      ? "bg-[var(--color-secondary)] font-medium text-[var(--color-foreground)]"
                      : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to={LINKS.docsHome}
              className={[
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                location.pathname.startsWith("/docs")
                  ? "bg-[var(--color-secondary)] font-medium text-[var(--color-foreground)]"
                  : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]",
              ].join(" ")}
            >
              {t.nav.docs}
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleLocale}
              className="flex h-8 items-center gap-1 rounded-md px-2 text-xs font-medium text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]"
              aria-label="Toggle language"
            >
              <Globe className="h-3.5 w-3.5" />
              {locale === "zh" ? "EN" : "中文"}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md text-[var(--color-muted-foreground)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="flex items-center gap-1 overflow-x-auto border-t border-[var(--color-border)] py-2 md:hidden">
          {navItems.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "shrink-0 rounded-md px-2.5 py-1 text-xs transition-colors",
                  active
                    ? "bg-[var(--color-secondary)] font-medium text-[var(--color-foreground)]"
                    : "text-[var(--color-muted-foreground)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to={LINKS.docsHome}
            className={[
              "shrink-0 rounded-md px-2.5 py-1 text-xs transition-colors",
              location.pathname.startsWith("/docs")
                ? "bg-[var(--color-secondary)] font-medium text-[var(--color-foreground)]"
                : "text-[var(--color-muted-foreground)]",
            ].join(" ")}
          >
            {t.nav.docs}
          </Link>
        </nav>
      </div>
    </header>
  );
}
