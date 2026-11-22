import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Github, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, locale, setLocale, resolvedTheme, toggleTheme } = useApp();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/features", label: t.nav.features },
    { to: "/desktop", label: t.nav.desktop },
    { to: "/deploy", label: t.nav.deploy },
    { to: LINKS.docsHome, label: t.nav.docs, match: "/docs" },
  ];

  const isActive = (to: string, match?: string) =>
    location.pathname.startsWith(match ?? to);

  const iconBtn =
    "flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "glass border-x-0 border-t-0"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
            alt="ternssh"
            className="h-7 w-7 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            ternssh
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm transition-colors",
                isActive(item.to, item.match)
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            className="flex h-9 items-center gap-1 rounded-full px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            {locale === "zh" ? "EN" : "中文"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className={iconBtn}
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
            className={cn(iconBtn, "hidden sm:flex")}
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link
            to="/deploy"
            className="ml-2 hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {t.nav.getStarted}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(iconBtn, "md:hidden")}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm",
                isActive(item.to, item.match)
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground"
          >
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
