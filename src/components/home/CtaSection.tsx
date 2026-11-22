import { Link } from "react-router-dom";
import { ArrowRight, Monitor } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { ShimmerLink } from "@/components/ui/shimmer-button";
import { Container, buttonStyles } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";

export function CtaSection() {
  const { t } = useApp();
  return (
    <section className="pb-24">
      <Container>
        <div className="hero-glow relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
          <ShineBorder shineColor={["var(--primary)", "var(--accent)"]} borderWidth={1.5} />
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
          <div className="relative">
            <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{t.cta.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ShimmerLink
                href={LINKS.deploy}
                target="_blank"
                rel="noopener noreferrer"
                background="var(--primary)"
                className="h-11 gap-2 px-6 text-sm font-semibold text-primary-foreground"
              >
                {t.hero.ctaDeploy}
                <ArrowRight className="h-4 w-4" />
              </ShimmerLink>
              <Link to="/desktop" className={buttonStyles.secondary}>
                <Monitor className="h-4 w-4" />
                {t.hero.ctaDownload}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
