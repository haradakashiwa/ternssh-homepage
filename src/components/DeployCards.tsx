import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useApp } from "../lib/app-context";
import { LINKS } from "../lib/links";

export function DeployCards() {
  const { t, locale } = useApp();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            {t.deploy.title}
          </h1>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            {t.deploy.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="glass flex flex-col rounded-2xl p-8">
            <div className="mb-4 inline-flex w-fit items-center rounded-full bg-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
              Cloudflare
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
              {t.deploy.cloudflare.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {t.deploy.cloudflare.desc}
            </p>
            <a
              href={LINKS.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              {t.deploy.cloudflare.cta}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="mt-4">
              <a
                href={LINKS.deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://deploy.workers.cloudflare.com/button"
                  alt="Deploy to Cloudflare"
                  className="h-8"
                />
              </a>
            </div>
          </article>

          <article className="glass flex flex-col rounded-2xl p-8">
            <div className="mb-4 inline-flex w-fit items-center rounded-full bg-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
              Docker
            </div>
            <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
              {t.deploy.docker.title}
            </h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {t.deploy.docker.desc}
            </p>
            <Link
              to={LINKS.docsDeploy}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              {t.deploy.docker.cta}
            </Link>
          </article>
        </div>

        <div className="mt-12 glass rounded-2xl p-6 text-center text-sm text-[var(--color-muted-foreground)]">
          <p>
            {locale === "zh" ? (
              <>
                完整部署与鉴权说明请参阅{" "}
                <Link
                  to={LINKS.docsHome}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  文档
                </Link>
                。
              </>
            ) : (
              <>
                See the{" "}
                <Link
                  to={LINKS.docsHome}
                  className="text-[var(--color-primary)] hover:underline"
                >
                  documentation
                </Link>{" "}
                for full deployment and authentication guides.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
