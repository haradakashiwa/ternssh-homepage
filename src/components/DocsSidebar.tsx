import { Link, useParams } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { useApp } from "../lib/app-context";
import { DOC_NAV } from "../lib/docs";
import { docsPath } from "../lib/links";

export function DocsSidebar() {
  const { locale, t } = useApp();
  const { slug = "home" } = useParams();
  const nav = DOC_NAV[locale];

  return (
    <aside className="w-full shrink-0 lg:w-56">
      <div className="glass sticky top-[7.5rem] rounded-xl p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-foreground)]">
          <BookOpen className="h-4 w-4 text-[var(--color-primary)]" />
          {t.nav.docs}
        </div>
        <nav className="flex flex-col gap-0.5">
          {nav.map((item) => {
            const active = slug === item.slug;
            return (
              <Link
                key={item.slug}
                to={docsPath(item.slug)}
                className={[
                  "rounded-md px-2.5 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-[color-mix(in_oklch,var(--color-primary)_12%,transparent)] font-medium text-[var(--color-primary)]"
                    : "text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
