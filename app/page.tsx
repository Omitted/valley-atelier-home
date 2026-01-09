import { Hero } from "@/components/home/hero";
import { ServicesPreview } from "@/components/home/services-preview";
import { WhyUs } from "@/components/home/why-us";
import { ProcessPreview } from "@/components/home/process-preview";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBand } from "@/components/home/cta-band";
import { VariantSwitcher } from "@/components/variant-switcher";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <ProcessPreview />
      <ProjectsPreview />
      <Testimonials />
      <CtaBand />

      {/* For Design Review Purpose Only */}
      <VariantSwitcher />
    </main>
  );
}
