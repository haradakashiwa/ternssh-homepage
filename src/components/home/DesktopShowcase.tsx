import { Link } from "react-router-dom";
import {
  AppWindow,
  ArrowRight,
  KeyRound,
  Keyboard,
  Network,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Container, SectionHeader, buttonStyles } from "@/components/site/primitives";
import { AppleIcon, WindowsIcon } from "@/components/site/icons";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

const ICONS: Record<string, LucideIcon> = {
  native: AppWindow,
  keychain: KeyRound,
  direct: Network,
  hotkey: Keyboard,
  access: ShieldCheck,
  update: RefreshCw,
};

export function DesktopHighlights() {
  const { t } = useApp();
  return (
    <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {t.desktop.highlights.map((h) => {
        const Icon = ICONS[h.key] ?? AppWindow;
        return (
          <div key={h.key} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary">
              <Icon className="h-4.5 w-4.5" />
            </div>
            <div>
              <h3 className="font-semibold">{h.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function DesktopShowcase({ withHeader = true }: { withHeader?: boolean }) {
  const { t } = useApp();
  const d = t.desktop;

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_30%,color-mix(in_oklch,var(--accent)_14%,transparent),transparent_70%)]" />
      <Container className="relative">
        {withHeader && (
          <SectionHeader eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} />
        )}

        <div className="relative mx-auto max-w-5xl">
          <div className="preview-shadow relative overflow-hidden rounded-2xl">
            <img
              src="/desktop-server.jpg"
              alt={d.shotServer}
              loading="lazy"
              className="block w-full"
            />
            <BorderBeam size={180} duration={12} colorFrom="var(--accent)" colorTo="var(--primary)" borderWidth={2} />
          </div>
        </div>

        <div className="mt-16">
          <DesktopHighlights />
        </div>

        {withHeader && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.desktopLatest}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.primary}
            >
              <AppleIcon className="h-4 w-4" />
              <WindowsIcon className="h-3.5 w-3.5" />
              {t.products.desktop.cta}
            </a>
            <Link to="/desktop" className={buttonStyles.secondary}>
              {t.products.desktop.secondary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
