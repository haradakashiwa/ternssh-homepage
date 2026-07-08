import { FeaturesGrid } from "../components/FeaturesGrid";
import { PreviewSection } from "../components/Hero";
import { useApp } from "../lib/app-context";

export function FeaturesPage() {
  const { t } = useApp();

  return (
    <>
      <section className="hero-glow border-b border-[var(--color-border)] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-3xl font-bold text-[var(--color-foreground)] sm:text-4xl">
            {t.features.title}
          </h1>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            {t.features.subtitle}
          </p>
        </div>
      </section>
      <FeaturesGrid compact />
      <PreviewSection />
    </>
  );
}
