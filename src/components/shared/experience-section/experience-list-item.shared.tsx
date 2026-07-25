import { ArrowUpRight } from "lucide-react";

interface ExperienceListItemProps {
  description: string;
  duration: string;
  role: string;
  title: string;
  url?: string;
}

interface EstimatedDuration {
  length: string;
  period: string;
}

const estimatedDurations: Record<string, EstimatedDuration> = {
  "2019 - 2020": { length: "≈ 24 mos", period: "2019 — 2020" },
  "2021 - 2023": { length: "≈ 36 mos", period: "2021 — 2023" },
  "2023 - 2024": { length: "≈ 24 mos", period: "2023 — 2024" },
  "2024": { length: "≈ 12 mos", period: "2024" },
  "2025": { length: "≈ 12 mos", period: "2025" },
  "2026": { length: "≈ 7 mos", period: "2026 — Present" }
};

function getDescriptionPoints(description: string): string[] {
  return description
    .split(/<br\s*\/>/)
    .map((point) => point.trim())
    .filter(Boolean);
}

export function ExperienceListItem({
  description,
  duration,
  role,
  title,
  url
}: ExperienceListItemProps): React.JSX.Element {
  const descriptionPoints = getDescriptionPoints(description);
  const estimatedDuration = estimatedDurations[duration] ?? {
    length: "Duration unavailable",
    period: duration
  };

  return (
    <article className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[1fr_144px] sm:gap-10 border-b border-[var(--line)]">
      <div>
        <div className="flex items-center gap-3 max-sm:flex-col max-sm:items-start max-sm:gap-0">
          <h3 className="text-lg font-bold tracking-[-.02em]">{role}</h3>
          <span className="opacity-40 mr-2 max-sm:hidden">•</span>
          <p className=" text-base font-semibold text-[var(--muted)]">
            {url ? (
              <a
                className="resume-link inline-flex items-center gap-1"
                href={url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {title}
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            ) : (
              title
            )}
          </p>
        </div>
        <ul className="mt-5 max-sm:mt-5 text-sm max-w-[680px] space-y-1 text-= leading-[1.7] text-[var(--muted)]">
          {descriptionPoints.map((point) => (
            <li
              className="relative pl-4 before:absolute before:left-0 before:content-['']"
              key={point}
            >
              <span className="opacity-40 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="order-first flex items-center justify-between text-xs font-medium text-[var(--faint)] sm:order-last sm:block sm:text-right">
        <span></span>
        <span className="mt-1 sm:block">
      {estimatedDuration.period}  · Remote
        </span>
      </div>
    </article>
  );
}
