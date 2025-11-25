import { CTASection } from "@/src/components/sections/cta.section";
import { ExperienceSection } from "@/src/components/sections/experience.section";
import { FooterSection } from "@/src/components/sections/footer.section";
import { HeroSection } from "@/src/components/sections/hero.section";
import { NavbarSection } from "@/src/components/sections/navbar.section";
import { ProjectsSection } from "@/src/components/sections/projects.section";
import { AbrasiveMask } from "@/src/components/shared/common/abrasive-mask";
import { myProjects } from "@/src/utils/shared/constants.util.shared";
import ReactLenis from "lenis/react";

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com";

  // Structured data for projects
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ese Curtis Portfolio Projects",
    description: "Key projects developed by Ese Curtis, Software Engineer and Fullstack Developer",
    itemListElement: myProjects.map((project, index) => ({
      "@type": "SoftwareApplication",
      position: index + 1,
      name: project.title,
      description: project.description,
      applicationCategory: "WebApplication",
      operatingSystem: "Web",
      url: project.liveUrl,
      image: `${baseUrl}${project.coverImageUrl}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <main
        id="main-content"
        className="flex min-h-screen font-mona-sans items-center justify-start flex-col "
        role="main"
        aria-label="Ese Curtis Portfolio - Software Engineer and Fullstack Developer"
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
        <div className="top-0 left-0 w-full h-[120px] z-10 bg-linear-to-b  from-black fixed max-sm:h-[230px]" aria-hidden="true" />
      </main>
    </>
  );
}
