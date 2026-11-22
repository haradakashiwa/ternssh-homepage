import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { LINKS } from "@/lib/links";
import { useApp } from "@/lib/app-context";

export function Footer() {
  const { t, resolvedTheme } = useApp();
  const linkCls =
    "text-sm text-muted-foreground transition-colors hover:text-foreground";

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={resolvedTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
              alt=""
              aria-hidden
              className="h-6 w-6"
            />
            <span className="font-semibold tracking-tight">ternssh</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            {t.footer.tagline}
          </p>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">{t.footer.product}</h4>
          <ul className="space-y-2.5">
            <li><Link to="/features" className={linkCls}>{t.footer.features}</Link></li>
            <li><Link to="/deploy" className={linkCls}>{t.footer.web}</Link></li>
            <li><Link to="/desktop" className={linkCls}>{t.footer.desktop}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold">{t.footer.resources}</h4>
          <ul className="space-y-2.5">
            <li><Link to={LINKS.docsHome} className={linkCls}>{t.footer.docs}</Link></li>
            <li><Link to={LINKS.docsDeploy} className={linkCls}>{t.footer.deploy}</Link></li>
            <li><a href={LINKS.github} target="_blank" rel="noopener noreferrer" className={linkCls}>{t.footer.github}</a></li>
            <li><a href={LINKS.desktopReleases} target="_blank" rel="noopener noreferrer" className={linkCls}>{t.footer.releases}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-muted-foreground sm:px-6">
          <span>© {new Date().getFullYear()} ternssh</span>
          <span>{t.footer.license}</span>
        </div>
      </div>
    </footer>
  );
}
