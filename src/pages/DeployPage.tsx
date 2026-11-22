import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Cloud, Container as DockerIcon, Copy, Monitor } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Container, SectionHeader, buttonStyles } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

function CodeBlock({ code }: { code: string }) {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative mt-5 rounded-xl border border-border bg-background">
      <button
        type="button"
        onClick={() => {
          void navigator.clipboard.writeText(code.replace(/\\\n\s*/g, ""));
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="absolute top-2 right-2 inline-flex items-center gap-1 rounded-md border border-border bg-card px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
      >
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        {copied ? t.deploy.copied : t.deploy.copy}
      </button>
      <pre className="overflow-x-auto p-4 pr-20 font-mono text-xs leading-relaxed text-foreground">
        {code}
      </pre>
    </div>
  );
}

export function DeployPage() {
  const { t } = useApp();
  const d = t.deploy;

  return (
    <section className="hero-glow py-20">
      <Container>
        <SectionHeader as="h1" title={d.title} subtitle={d.subtitle} />

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8">
            <BorderBeam size={160} duration={9} colorFrom="var(--primary)" colorTo="var(--accent)" />
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Cloud className="h-5 w-5" />
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {d.cloudflare.badge}
              </span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">{d.cloudflare.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{d.cloudflare.desc}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={LINKS.deploy} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
                {d.cloudflare.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link to={LINKS.docsDeploy} className={buttonStyles.ghost}>
                {d.docker.cta}
              </Link>
            </div>
          </article>

          <article className="flex flex-col rounded-2xl border border-border bg-card p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground">
              <DockerIcon className="h-5 w-5" />
            </div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight">{d.docker.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.docker.desc}</p>
            <CodeBlock code={LINKS.dockerRun} />
            <Link to={LINKS.docsDeploy} className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              {d.docker.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        </div>

        <Link
          to="/desktop"
          className="group mt-6 flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Monitor className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold">{d.desktop.title}</h2>
            <p className="text-sm text-muted-foreground">{d.desktop.desc}</p>
          </div>
          <span className="hidden items-center gap-1 text-sm font-medium text-primary sm:inline-flex">
            {d.desktop.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          {d.docsHint}{" "}
          <Link to={LINKS.docsHome} className="text-primary hover:underline">
            {d.docsLink}
          </Link>
        </p>
      </Container>
    </section>
  );
}
