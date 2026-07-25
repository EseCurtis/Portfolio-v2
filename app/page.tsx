import { CTASection } from "@/src/components/sections/cta.section";
import { ExperienceSection } from "@/src/components/sections/experience.section";
import { FooterSection } from "@/src/components/sections/footer.section";
import { HeroSection } from "@/src/components/sections/hero.section";
import { NavbarSection } from "@/src/components/sections/navbar.section";
import { ProjectsSection } from "@/src/components/sections/projects.section";
import { myProjects } from "@/src/utils/shared/constants.util.shared";

export default function Home(): React.JSX.Element {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://esecurtis.com";
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: myProjects.map((project, index) => ({
      "@type": "SoftwareApplication",
      applicationCategory: "WebApplication",
      description: project.description,
      image: `${baseUrl}${project.coverImageUrl}`,
      name: project.title,
      operatingSystem: "Web",
      position: index + 1,
      url: project.liveUrl
    })),
    name: "Ese Curtis — selected work"
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} type="application/ld+json" />
      <a className="skip-link" href="#resume-content">Skip to résumé</a>
      <main aria-label="Ese Curtis résumé" className="resume-page" id="resume-content" tabIndex={-1}>
        <NavbarSection />
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
