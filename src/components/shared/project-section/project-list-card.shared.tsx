import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectListCardProps { blogPostUrl: string; coverImageUrl: string; description: string; githubUrl: string; liveUrl: string; tagLine: string; title: string; }

export function ProjectListCard({ description, liveUrl, tagLine, title }: ProjectListCardProps): React.JSX.Element {
  return (
    <article className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8 border-b border-[var(--line)]">
      <div><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 max-w-[680px] text-sm leading-[1.7] text-[var(--muted)]">{description}</p><p className="mt-3 text-xs font-semibold uppercase tracking-[.08em] text-[var(--faint)]">{tagLine}</p></div>
      <Link className="resume-link inline-flex min-h-11 w-fit items-center gap-1 text-xs font-bold uppercase tracking-[.08em] sm:mt-0.5" href={liveUrl} rel="noopener noreferrer" target="_blank">Live <ArrowUpRight aria-hidden="true" size={14} /></Link>
    </article>
  );
}
