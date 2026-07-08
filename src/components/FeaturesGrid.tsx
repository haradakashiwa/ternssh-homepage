import {
  Bot,
  Cloud,
  Command,
  Gauge,
  LayoutDashboard,
  Lock,
  Server,
  Terminal,
  FolderOpen,
} from "lucide-react";
import { useApp } from "../lib/app-context";

const icons = [
  LayoutDashboard,
  Terminal,
  FolderOpen,
  Gauge,
  Command,
  Bot,
  Cloud,
  Lock,
];

export function FeaturesGrid({
  compact = false,
  embedded = false,
}: {
  compact?: boolean;
  embedded?: boolean;
}) {
  const { t } = useApp();
  const showHeader = !compact || embedded;

  return (
    <section
      className={
        embedded
          ? "mt-8"
          : compact
            ? "py-16 sm:py-20"
            : "border-t border-[var(--color-border)] py-20"
      }
    >
      <div className={embedded ? "" : "mx-auto max-w-6xl px-4 sm:px-6"}>
        {showHeader && (
          <div className={embedded ? "mb-6" : "mb-12 text-center"}>
            <h2
              className={
                embedded
                  ? "text-xl font-bold text-[var(--color-foreground)]"
                  : "text-2xl font-bold text-[var(--color-foreground)] sm:text-3xl"
              }
            >
              {t.features.title}
            </h2>
            <p
              className={
                embedded
                  ? "mt-2 text-sm text-[var(--color-muted-foreground)]"
                  : "mt-3 text-[var(--color-muted-foreground)]"
              }
            >
              {t.features.subtitle}
            </p>
          </div>
        )}

        <div className="features-grid">
          {t.features.items.map((item, i) => {
            const Icon = icons[i] ?? Server;
            return (
              <article
                key={item.title}
                className="glass group flex h-full min-w-0 flex-col rounded-xl p-5 transition-colors hover:border-[color-mix(in_oklch,var(--color-primary)_40%,transparent)]"
              >
                <div className="mb-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] text-[var(--color-primary)] transition-colors group-hover:bg-[color-mix(in_oklch,var(--color-primary)_20%,transparent)]">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="shrink-0 text-sm font-semibold text-[var(--color-foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[var(--color-muted-foreground)]">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
