import { myProjects } from "@/src/utils/shared/constants.util.shared";
import { ProjectListCard } from "../shared/project-list-card.shared";

export function ProjectsSection() {
  return (
    <section 
      className="min-h-screen w-full pb-[70px] max-sm:pt-[200px]"
      aria-labelledby="projects-heading"
    >
      <header className="px-mg z-10 relative max-sm:px-05-mg">
        <h2 id="projects-heading" className="text-3xl font-mona-sans-exp font-semibold">
          My Projects
        </h2>
        <p className="text-white/80">These are my key projects, a few but solid.</p>
      </header>

      <div 
        className="grid grid-cols-3 px-mg mt-mg gap-7 gap-y-mg max-sm:grid-cols-1 max-sm:px-05-mg max-sm:gap-20"
        role="list"
        aria-label="Portfolio projects"
      >
        {myProjects.map((item) => (
          <ProjectListCard
            key={item.title}
            title={item.title}
            tagLine={item.tagLine}
            description={item.description}
            coverImageUrl={item.coverImageUrl}
            blogPostUrl={item.blogPostUrl}
            githubUrl={item.githubUrl}
            liveUrl={item.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}
