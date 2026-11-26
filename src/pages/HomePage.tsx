import { HeroSection } from "@/components/home/HeroSection";
import { StackMarquee } from "@/components/home/StackMarquee";
import { ProductsSection } from "@/components/home/ProductsSection";
import { FeaturesBento } from "@/components/home/FeaturesBento";
import { QuickStart } from "@/components/home/QuickStart";
import { DesktopShowcase } from "@/components/home/DesktopShowcase";
import { RemoteVibe } from "@/components/home/RemoteVibe";
import { SecuritySection } from "@/components/home/SecuritySection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaSection } from "@/components/home/CtaSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StackMarquee />
      <ProductsSection />
      <FeaturesBento />
      <QuickStart />
      <DesktopShowcase />
      <RemoteVibe />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
