import {
  contactsUrl,
  quickLinks
} from "@/src/utils/shared/constants.util.shared";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function NavbarSection() {
  return (
    <nav className="fixed left-0 top-0 z-11 flex w-full flex-wrap items-center justify-between gap-4 px-4 py-4 sm:h-[70px] sm:flex-nowrap sm:px-6 lg:mg-x max-sm:pt-mg">
      <div className="flex w-full items-center justify-between sm:w-auto">
        <h1 className="text-3xl font-extrabold font-mona-sans-exp max-sm:text-center max-sm:w-full">
          Ese Curtis
        </h1>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 text-sm font-mona-sans-exp sm:w-auto sm:justify-end sm:gap-7">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:gap-7">
          <Link
            href={quickLinks.aboutMeUrl}
            target="_blank"
            className="hover:underline"
          >
            About Me
          </Link>
          <Link
            href={quickLinks.myBlogUrl}
            target="_blank"
            className="hover:underline"
          >
            My Blog
          </Link>
        </div>

        <span className="hidden text-white/80 sm:inline">•</span>

        <div className="flex items-center justify-center gap-5 sm:gap-7">
          <Link
            href={contactsUrl.email}
            target="_blank"
            className="hover:opacity-60"
          >
            <Mail size={17} />
          </Link>
          <Link
            href={contactsUrl.instagram}
            target="_blank"
            className="hover:opacity-60"
          >
            <Instagram size={17} />
          </Link>
          <Link
            href={contactsUrl.twitter}
            target="_blank"
            className="hover:opacity-60"
          >
            <Twitter size={17} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
