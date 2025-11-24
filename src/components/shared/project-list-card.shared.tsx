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
    <div className=" relative z-10 aspect-square col-span-1 max-sm:aspect-auto">
      <div className="z-10 relative flex flex-col justify-end h-full gap-3">
        <div className="bg-gray-600/50 z-10 h-full relative rounded-2xl overflow-hidden border border-[#ffffff00]">
          {/* <AbrasiveMask position="absolute" /> */}
          <Image
            src={coverImageUrl}
            alt={title}
            width={200}
            height={200}
            className="size-full object-cover"
          />
        </div>

        <div className="px-3">
          <div className="flex justify-between items-center  pb-1">
            <b className="text-xl font-mona-sans-exp">{title}</b>

            <div className="flex w-full items-center justify-end gap-2 text-sm">
              <p className="font-mona-sans-exp font-semibold borsder-2 rounded-lg  py-1  bosrder-white">
                {tagLine}
              </p>
            </div>
          </div>
          <p className="text-white/70">{description}</p>
        </div>

        <div className="flex w-full items-center justify-start gap-2">
          {githubUrl && (
            <Link
              target="_blank"
              href={githubUrl}
              className="p-3 py-2 hover:opacity-40"
            >
              <Github />
            </Link>
          )}
          {githubUrl && <span>•</span>}
          <Link
            target="_blank"
            href={blogPostUrl}
            className="font-mona-sans-exp font-semibold hover:underline borsder-2 rounded-lg  py-1  bosrder-white"
          >
            Read More
          </Link>
          <span>•</span>
          <Link
            target="_blank"
            href={liveUrl}
            className="font-mona-sans-exp font-semibold hover:underline bordser-2 rounded-lg py-1  bordser-white"
          >
            View Live
          </Link>
        </div>
      </div>
    </div>
  );
}
