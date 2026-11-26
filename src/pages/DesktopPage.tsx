import { DesktopShowcase } from "@/components/home/DesktopShowcase";
import { CompareTable } from "@/components/home/CompareTable";
import { RemoteVibe } from "@/components/home/RemoteVibe";
import { DownloadCards } from "@/components/DownloadCards";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Container } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

export function DesktopPage() {
  const { t } = useApp();
  const d = t.desktop;
  return (
    <>
      <section className="hero-glow pt-20 pb-4">
        <Container className="max-w-4xl text-center">
          <div className="mx-auto inline-flex rounded-full border border-border bg-card/60">
            <AnimatedShinyText className="px-4 py-1.5 text-xs font-medium">
              macOS · Windows · {t.nav.download}
            </AnimatedShinyText>
          </div>
          <h1 className="text-gradient mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {d.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">{d.subtitle}</p>
          <div id="download" className="mt-10 text-left">
            <DownloadCards />
          </div>
        </Container>
      </section>
      <DesktopShowcase withHeader={false} />
      <RemoteVibe />
      <CompareTable />
    </>
  );
}
