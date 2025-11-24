import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  tagLine: string;
  description: string;
  coverImageUrl: string;
  blogPostUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export function ProjectListCard({
  title,
  tagLine,
  description,
  coverImageUrl = "/media/broken-image.png",
  blogPostUrl,
  githubUrl,
  liveUrl
}: Props) {
  return (
    <article 
      className=" relative z-10 aspect-square col-span-1 max-sm:aspect-auto"
      role="listitem"
    >
      <div className="z-10 relative flex flex-col justify-end h-full gap-3">
        <div className="bg-gray-600/50 z-10 h-full relative rounded-2xl overflow-hidden border border-[#ffffff00]">
          {/* <AbrasiveMask position="absolute" /> */}
          <Image
            src={coverImageUrl}
            alt={`${title} - ${tagLine} project screenshot`}
            width={200}
            height={200}
            className="size-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-3">
          <header className="flex justify-between items-center  pb-1">
            <h3 className="text-xl font-mona-sans-exp font-bold">{title}</h3>

            <div className="flex w-full items-center justify-end gap-2 text-sm">
              <span className="font-mona-sans-exp font-semibold borsder-2 rounded-lg  py-1  bosrder-white">
                {tagLine}
              </span>
            </div>
          </header>
          <p className="text-white/70">{description}</p>
        </div>

        <nav className="flex w-full items-center justify-start gap-2" aria-label={`${title} project links`}>
          {githubUrl && (
            <Link
              target="_blank"
              href={githubUrl}
              rel="noopener noreferrer"
              className="p-3 py-2 hover:opacity-40"
              aria-label={`View ${title} on GitHub`}
            >
              <Github aria-hidden="true" />
            </Link>
          )}
          {githubUrl && <span aria-hidden="true">•</span>}
          <Link
            target="_blank"
            href={blogPostUrl}
            rel="noopener noreferrer"
            className="font-mona-sans-exp font-semibold hover:underline borsder-2 rounded-lg  py-1  bosrder-white"
            aria-label={`Read more about ${title}`}
          >
            Read More
          </Link>
          <span aria-hidden="true">•</span>
          <Link
            target="_blank"
            href={liveUrl}
            rel="noopener noreferrer"
            className="font-mona-sans-exp font-semibold hover:underline bordser-2 rounded-lg py-1  bordser-white"
            aria-label={`View ${title} live project`}
          >
            View Live
          </Link>
        </nav>
      </div>
    </article>
  );
}
