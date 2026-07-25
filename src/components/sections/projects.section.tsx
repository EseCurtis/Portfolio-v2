import { ProjectListCard } from "@/src/components/shared/project-section/project-list-card.shared";
import { myProjects } from "@/src/utils/shared/constants.util.shared";

export function ProjectsSection(): React.JSX.Element {
  return (
    <section className="pb-10 sm:pb-12" id="projects">
      <h2 className="section-label section-heading">Selected projects</h2>
      <div>{myProjects.map((project) => <ProjectListCard key={project.title} {...project} />)}</div>
    </section>
  );
}
