import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Legacy } from "@/components/Legacy";
import { WhyFDG } from "@/components/WhyFDG";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { BenefitsAndStats } from "@/components/BenefitsAndStats";
import { TestimonialsGrid } from "@/components/TestimonialsGrid";
import { CTAAndFooter } from "@/components/CTAAndFooter";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Legacy />
      <WhyFDG />
      <Projects />
      <Testimonials />
      <Services />
      <Gallery />
      <BenefitsAndStats />
      <TestimonialsGrid />
      <CTAAndFooter />
    </main>
  );
}
