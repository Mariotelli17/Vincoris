import { CtaFinalSection } from "@/components/sections/CtaFinalSection";
import { DiferenciacionSection } from "@/components/sections/DiferenciacionSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemaSection } from "@/components/sections/ProblemaSection";
import { ProcesoSection } from "@/components/sections/ProcesoSection";
import { SolucionSection } from "@/components/sections/SolucionSection";
import { TestimoniosSection } from "@/components/sections/TestimoniosSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemaSection />
      <SolucionSection />
      <DiferenciacionSection />
      <ProcesoSection />
      <TestimoniosSection />
      <CtaFinalSection />
    </main>
  );
}
