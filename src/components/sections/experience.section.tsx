import { cn, pickRandomColor } from "@/src/utils/helpers.util";
import {
  myExperience,
  mySkills
} from "@/src/utils/shared/constants.util.shared";
import { AbrasiveMask } from "../abrasive-mask";
import { ExperienceListItem } from "../shared/experience-list-item.shared";

function Experiences() {
  return (
    <div className="col-span-1">
      <div className="px-mg z-10 relative max-sm:px-05-mg">
        <h3 className="text-3xl font-mona-sans-exp font-semibold">
          My Experience
        </h3>
        <p>Compiled experiences over the years.</p>
      </div>

      <div className="flex flex-col mt-mg gap-3 relative z-10 pl-mg max-sm:px-05-mg">
        <div className="pl-mg space-y-10 overflow-hidden">
          {myExperience.map((experience) => (
            <ExperienceListItem
              key={experience.title}
              title={experience.title}
              role={experience.role}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="col-span-1 pr-mg max-sm:px-05-mg max-sm:mt-mg">
        <div className="z-10 relative mb-05-mg">
        <h3 className="text-3xl font-mona-sans-exp font-semibold">
          My Skills
        </h3>
        <p>Some of the skills I have.</p>
      </div>
      <div className="size-full grid grid-cols-4 gap-3 max-sm:flex max-sm:flex-wrap">
        {mySkills.map((skill) => (
          <div
            className={cn(
              "col-span-1 z-10 bg-gray-700 group group-hover:bg-(--active-color) relative"
            )}
            style={{
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              "--active-color": pickRandomColor(skill)
            }}
            key={skill}
          >
            <div className=" p-3 group-hover:bg-(--active-color) size-full relative font-bold font-mona-sans-exp">
              <span className="relative  z-10">{skill}</span>
            </div>

            <AbrasiveMask position="absolute" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="pb-[70px] w-full grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-7">
      <Experiences />
      <Skills />
    </div>
  );
}
