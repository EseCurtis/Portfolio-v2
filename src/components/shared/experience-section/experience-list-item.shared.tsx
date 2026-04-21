import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  url?: string;
  role: string;
  duration: string;
  description: string;
}

export function ExperienceListItem({
  title,
  url,
  role,
  duration,
  description
}: Props) {
  return (
    <div className="flex flex-col relative">
      <div
        style={{
          mask: "linear-gradient( transparent 40%, #000)"
        }}
        className="border-l border-b h-[calc(100%+60px)] w-7 absolute bottom-mg -left-mg border-white/50 rounded-bl-xl"
      />

      <b className="text-md text-white/70 font-mona-sans-exp">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-col items-start gap-1 transition-colors hover:text-white"
          >
            <span>{title}</span>
            <span className="inline-flex items-center text-white/50">
              <ArrowUpRight size={14} strokeWidth={2} />
            </span>
          </a>
        ) : (
          title
        )}
      </b>
      <b className="text-xl mt-2">
        {role} • <span className="text-sm text-white/70">{duration}</span>
      </b>
      <p
        className="text-white/70 mt-3"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
