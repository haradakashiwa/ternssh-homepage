import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { Container, SectionHeader, buttonStyles } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

export function QuickStart() {
  const { t } = useApp();
  const q = t.quickstart;

  return (
    <section className="border-y border-border bg-secondary/30 py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow={q.eyebrow} title={q.title} subtitle={q.subtitle} align="left" />
          <ol className="space-y-6">
            {q.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={LINKS.deploy} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
              Deploy to Cloudflare
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/deploy" className={buttonStyles.secondary}>
              Docker
            </Link>
          </div>
        </div>

        <Terminal className="h-auto max-w-none self-center bg-card font-mono shadow-xl">
          <TypingAnimation className="break-all whitespace-pre-wrap text-foreground" duration={24}>
            {"$ docker run -d -p 8787:8787 ghcr.io/haradakashiwa/ternssh"}
          </TypingAnimation>
          {q.terminal.map((line, i) => (
            <AnimatedSpan
              key={line}
              className={i === q.terminal.length - 1 ? "text-primary" : "text-green-500"}
            >
              <span>
                {i === q.terminal.length - 1 ? "→" : "✔"} {line}
              </span>
            </AnimatedSpan>
          ))}
        </Terminal>
      </Container>
    </section>
  );
}
