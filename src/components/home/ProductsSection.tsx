import { Link } from "react-router-dom";
import { ArrowLeftRight, ArrowRight, Check, Globe2, Monitor } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Container, SectionHeader, buttonStyles } from "@/components/site/primitives";
import { AppleIcon, WindowsIcon } from "@/components/site/icons";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

export function ProductsSection() {
  const { t, resolvedTheme } = useApp();
  const dark = resolvedTheme === "dark";
  const gradientColor = dark ? "#1f2a27" : "#eef6f3";
  const p = t.products;

  const cards = [
    {
      key: "web",
      Icon: Globe2,
      data: p.web,
      platforms: <span className="text-xs text-muted-foreground">Chrome · Safari · Edge · Firefox</span>,
      primary: (
        <a href={LINKS.deploy} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
          {p.web.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      ),
      secondary: (
        <Link to="/deploy" className={buttonStyles.ghost}>
          {p.web.secondary}
        </Link>
      ),
    },
    {
      key: "desktop",
      Icon: Monitor,
      data: p.desktop,
      platforms: (
        <span className="flex items-center gap-2 text-muted-foreground">
          <AppleIcon className="h-4 w-4" />
          <WindowsIcon className="h-3.5 w-3.5" />
        </span>
      ),
      primary: (
        <a href={LINKS.desktopLatest} target="_blank" rel="noopener noreferrer" className={buttonStyles.primary}>
          {p.desktop.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      ),
      secondary: (
        <Link to="/desktop" className={buttonStyles.ghost}>
          {p.desktop.secondary}
        </Link>
      ),
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <SectionHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

        <div className="relative grid gap-6 md:grid-cols-2">
          {cards.map(({ key, Icon, data, platforms, primary, secondary }) => (
            <MagicCard
              key={key}
              gradientColor={gradientColor}
              gradientFrom="var(--primary)"
              gradientTo="var(--accent)"
              className="rounded-2xl"
            >
              <div className="flex h-full flex-col p-8">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {platforms}
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{data.name}</h3>
                <p className="mt-2 text-muted-foreground">{data.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {data.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {primary}
                  {secondary}
                </div>
              </div>
            </MagicCard>
          ))}

          <div className="pointer-events-none absolute top-1/2 left-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-lg">
              <ArrowLeftRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">{p.sync}</p>
      </Container>
    </section>
  );
}
