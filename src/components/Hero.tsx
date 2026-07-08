import {
  ArrowRight,
  BookOpen,
  Cloud,
  Github,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useApp } from "../lib/app-context";
import { LINKS } from "../lib/links";

export function HeroSection() {
  const { t } = useApp();

  return (
    <section className="hero-glow grid-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklch,var(--color-primary)_30%,transparent)] bg-[color-mix(in_oklch,var(--color-primary)_8%,transparent)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            <Cloud className="h-3.5 w-3.5" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl">
            <span className="text-[var(--color-primary)]">ternssh</span>
            <br />
            <span className="text-2xl font-semibold text-[var(--color-muted-foreground)] sm:text-3xl lg:text-4xl">
              {t.hero.title}
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-[var(--color-muted-foreground)] sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--color-primary)] px-6 text-sm font-semibold text-[var(--color-primary-foreground)] transition-opacity hover:opacity-90"
            >
              <LayoutDashboard className="h-4 w-4" />
              {t.hero.ctaDeploy}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to={LINKS.docsHome}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)] px-6 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-secondary)]"
            >
              <BookOpen className="h-4 w-4" />
              {t.hero.ctaDocs}
            </Link>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-lg px-6 text-sm font-medium text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-foreground)]"
            >
              <Github className="h-4 w-4" />
              {t.hero.ctaGithub}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="preview-shadow overflow-hidden rounded-xl border border-[var(--color-border)]">
            <img
              src="/preview.png"
              alt="ternssh dashboard preview"
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PreviewSection() {
  const { t } = useApp();

  return (
    <section className="border-t border-[var(--color-border)] bg-[var(--color-secondary)]/20 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)]">
            <Sparkles className="h-4 w-4" />
            {t.preview.title}
          </div>
          <p className="text-[var(--color-muted-foreground)]">
            {t.preview.subtitle}
          </p>
        </div>
        <div className="preview-shadow mx-auto max-w-5xl overflow-hidden rounded-xl">
          <img
            src="/preview.png"
            alt="ternssh dashboard preview"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  const { t } = useApp();

  return (
    <section className="border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl">
          {t.deploy.title}
        </h2>
        <p className="mt-3 text-[var(--color-muted-foreground)]">
          {t.deploy.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={LINKS.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[var(--color-primary)] px-8 text-sm font-semibold text-[var(--color-primary-foreground)] transition-opacity hover:opacity-90"
          >
            {t.hero.ctaDeploy}
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/deploy"
            className="text-sm text-[var(--color-primary)] hover:underline"
          >
            {t.nav.deploy} →
          </Link>
        </div>
      </div>
    </section>
  );
}
