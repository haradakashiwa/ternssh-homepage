import { Bot, Globe, Smartphone, SquareTerminal, Laptop, type LucideIcon } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

const ICONS: Record<string, LucideIcon> = {
  same: SquareTerminal,
  agent: Bot,
  phone: Smartphone,
  secure: Globe,
};

// What the phone shows: an agent at work in a terminal of the desktop.
const LINES: { text: string; cls?: string }[] = [
  { text: "$ claude", cls: "text-muted-foreground" },
  { text: "✳ Refactoring the auth middleware…", cls: "text-primary" },
  { text: "  Edit src/auth.ts  +42 −17" },
  { text: "  Edit src/session.ts  +8 −3" },
  { text: "  Run npm test" },
  { text: "  ✓ 128 passed", cls: "text-emerald-500" },
  { text: "" },
  { text: "? Run git push origin main?", cls: "text-amber-500" },
  { text: "  › 1. Yes", cls: "text-foreground" },
  { text: "    2. No", cls: "text-muted-foreground" },
];

const KEYS = ["Esc", "Tab", "Ctrl", "Alt", "↑", "↓", "←", "→", "^C"];

function Phone() {
  const { t } = useApp();
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]" role="img" aria-label={t.remote.phoneTitle}>
      <div className="preview-shadow relative overflow-hidden rounded-[2.6rem] border-[10px] border-neutral-900 bg-background dark:border-neutral-800">
        <div className="absolute top-2 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900 dark:bg-neutral-800" />
        <div className="flex items-center justify-between px-5 pt-9 pb-2 text-[11px] font-semibold">
          <span>ternssh</span>
          <span className="flex items-center gap-1 text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {t.remote.synced}
          </span>
        </div>
        <div className="flex gap-1.5 border-b border-border px-3 pb-2">
          <span className="rounded-md bg-card px-2 py-1 text-[10px] font-medium ring-1 ring-border">
            api-server <span className="text-primary">✳</span>
          </span>
          <span className="rounded-md px-2 py-1 text-[10px] text-muted-foreground">zsh</span>
        </div>
        <div className="h-[300px] overflow-hidden bg-card/60 px-3 py-3 font-mono text-[10.5px] leading-[1.6]">
          {LINES.map((l, i) => (
            <div key={i} className={`whitespace-pre ${l.cls ?? ""}`}>
              {l.text || " "}
            </div>
          ))}
          <div className="mt-0.5 h-3.5 w-1.5 animate-pulse bg-foreground/70" />
        </div>
        <div className="flex gap-1 overflow-hidden border-t border-border px-2 py-2">
          {KEYS.map((k) => (
            <span
              key={k}
              className={`shrink-0 rounded-md border border-border px-1.5 py-1 font-mono text-[9.5px] ${
                k === "Ctrl" ? "border-primary bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              {k}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-1 mb-2 h-1 w-24 rounded-full bg-foreground/30" />
      </div>
    </div>
  );
}

export function RemoteVibe() {
  const { t } = useApp();
  const r = t.remote;
  return (
    <section className="relative overflow-hidden border-t border-border py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_50%_at_75%_50%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_70%)]" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            <Laptop className="h-3.5 w-3.5" />→<Smartphone className="h-3.5 w-3.5" />
            {r.eyebrow}
          </div>
          <h2 className="text-gradient text-3xl font-semibold tracking-tight text-balance sm:text-5xl">{r.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{r.subtitle}</p>
          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {r.points.map((p) => {
              const Icon = ICONS[p.key] ?? SquareTerminal;
              return (
                <div key={p.key} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Phone />
      </Container>
    </section>
  );
}
