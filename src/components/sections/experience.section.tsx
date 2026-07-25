import { ExperienceListItem } from "@/src/components/shared/experience-section/experience-list-item.shared";
import { myExperience } from "@/src/utils/shared/constants.util.shared";

const experienceOrder = [0, 1, 2, 5, 4, 3];

export function ExperienceSection(): React.JSX.Element {
  return (
    <section className="pb-10 sm:pb-12" id="experience">
      <h2 className="section-label section-heading">Experience</h2>
      <div>{experienceOrder.map((experienceIndex) => <ExperienceListItem key={myExperience[experienceIndex].title} {...myExperience[experienceIndex]} />)}</div>
    </section>
  );
}
