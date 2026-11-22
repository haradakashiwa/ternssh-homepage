import { FeaturesBento } from "@/components/home/FeaturesBento";
import { CompareTable } from "@/components/home/CompareTable";
import { SecuritySection } from "@/components/home/SecuritySection";
import { CtaSection } from "@/components/home/CtaSection";
import { Container, SectionHeader } from "@/components/site/primitives";
import { useApp } from "@/lib/app-context";

export function FeaturesPage() {
  const { t } = useApp();
  return (
    <>
      <section className="hero-glow pt-20">
        <Container>
          <SectionHeader
            as="h1"
            eyebrow={t.features.eyebrow}
            title={t.features.title}
            subtitle={t.features.subtitle}
          />
        </Container>
      </section>
      <div className="-mt-24">
        <FeaturesBento />
      </div>
      <CompareTable />
      <SecuritySection />
      <div className="pt-24">
        <CtaSection />
      </div>
    </>
  );
}
