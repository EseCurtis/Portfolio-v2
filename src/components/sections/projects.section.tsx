import { myProjects } from "@/src/utils/shared/constants.util.shared";
import { ProjectListCard } from "../shared/project-list-card.shared";

export function ProjectsSection() {
  return (
    <div className="min-h-screen w-full pb-[70px]">
      <div className="px-mg z-10 relative">
        <h3 className="text-3xl font-mona-sans-exp font-semibold">
          My Projects
        </h3>
        <p>these are my key projects, A few but solid.</p>
      </div>

      <div className="grid grid-cols-3 px-mg mt-mg gap-7 gap-y-mg">
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
    </div>
  );
}
