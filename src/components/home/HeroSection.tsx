import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, ChevronRight, Github, Monitor, Globe2 } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerLink } from "@/components/ui/shimmer-button";
import { buttonStyles } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";
import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";

type Tab = "web" | "desktop";

export function HeroSection() {
  const { t, resolvedTheme } = useApp();
  const [tab, setTab] = useState<Tab>("web");

  const webSrc = resolvedTheme === "dark" ? "/preview-dark.png" : "/preview-light.png";

  return (
    <section className="hero-glow relative overflow-hidden">
      <DotPattern
        width={22}
        height={22}
        className="text-[var(--grid-dot)] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_30%,#000_30%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            to="/desktop"
            className="group mx-auto inline-flex items-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:bg-secondary"
          >
            <AnimatedShinyText className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t.hero.badge}
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h1
            className="animate-fade-up mt-8 text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t.hero.titleA}</span>
            <br />
            <span className="text-brand-gradient">{t.hero.titleB}</span>
          </h1>

          <p
            className="animate-fade-up mx-auto [animation-delay:100ms] mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t.hero.subtitle}
          </p>

          <div
            className="animate-fade-up mt-10 [animation-delay:200ms] flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <ShimmerLink
              href={LINKS.deploy}
              target="_blank"
              rel="noopener noreferrer"
              background="var(--primary)"
              shimmerColor="#ffffff"
              className="h-11 gap-2 px-6 text-sm font-semibold text-primary-foreground"
            >
              {t.hero.ctaDeploy}
              <ArrowRight className="h-4 w-4" />
            </ShimmerLink>
            <Link to="/desktop" className={buttonStyles.secondary}>
              <Monitor className="h-4 w-4" />
              {t.hero.ctaDownload}
            </Link>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles.ghost}
            >
              <Github className="h-4 w-4" />
              {t.hero.ctaGithub}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            {t.hero.facts.map((f) => (
              <li key={f} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="mb-5 flex justify-center">
            <div
              role="tablist"
              className="inline-flex rounded-full border border-border bg-card/70 p-1 backdrop-blur"
            >
              {(
                [
                  ["web", t.hero.tabWeb, Globe2],
                  ["desktop", t.hero.tabDesktop, Monitor],
                ] as const
              ).map(([key, label, Icon]) => (
                <button
                  key={key}
                  role="tab"
                  type="button"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm transition-colors",
                    tab === key
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {tab === key && (
                    <motion.span
                      layoutId="hero-tab"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <Icon className="relative h-3.5 w-3.5" />
                  <span className="relative">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="preview-shadow relative overflow-hidden rounded-[22px] bg-card">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={tab === "web" ? webSrc : "desktop"}
                src={tab === "web" ? webSrc : "/desktop-server.jpg"}
                alt={tab === "web" ? "ternssh web dashboard" : "ternssh desktop client"}
                initial={{ opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.3 }}
                className="block w-full"
                loading="eager"
              />
            </AnimatePresence>
            <BorderBeam
              size={220}
              duration={10}
              borderWidth={2}
              colorFrom="var(--primary)"
              colorTo="var(--accent)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
