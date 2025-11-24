import { AbrasiveMask } from "@/src/components/abrasive-mask";
import { CTASection } from "@/src/components/sections/cta.section";
import { ExperienceSection } from "@/src/components/sections/experience.section";
import { FooterSection } from "@/src/components/sections/footer.section";
import { HeroSection } from "@/src/components/sections/hero.section";
import { NavbarSection } from "@/src/components/sections/navbar.section";
import { ProjectsSection } from "@/src/components/sections/projects.section";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen font-mona-sans items-center justify-start flex-col "
    >
      <ReactLenis root />
      <NavbarSection />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <CTASection />
      <FooterSection />

      {/* mask element for the bg noise */}
      <AbrasiveMask />
      <div className="top-0 left-0 w-full h-[120px] z-10 bg-linear-to-b  from-black fixed max-sm:h-[230px]" />
    </main>
  );
}
