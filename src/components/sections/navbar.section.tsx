import {
  contactsUrl,
  quickLinks
} from "@/src/utils/shared/constants.util.shared";
import { Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function NavbarSection() {
  return (
    <nav
      className="fixed left-0 top-0 z-11 flex w-full flex-wrap items-center justify-between gap-4 px-4 py-4 sm:h-[70px] sm:flex-nowrap sm:px-6 lg:mg-x max-sm:pt-mg"
      aria-label="Main navigation"
    >
      <div className="flex w-full items-center justify-between sm:w-auto">
        <Link
          href="/"
          className="text-3xl font-extrabold font-mona-sans-exp max-sm:text-center max-sm:w-full"
          aria-label="Ese Curtis - Home"
        >
          Ese Curtis
        </Link>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 text-sm font-mona-sans-exp sm:w-auto sm:justify-end sm:gap-7">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:gap-7">
          <Link
            href={quickLinks.aboutMeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Read about Ese Curtis"
          >
            About Me
          </Link>

          <Link
            href={contactsUrl.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Visit Ese Curtis Github"
          >
            My Github
          </Link>
          <Link
            href={quickLinks.myBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            aria-label="Visit Ese Curtis blog"
          >
            My Blog
          </Link>
        </div>

        <span className="hidden text-white/80 sm:inline" aria-hidden="true">
          •
        </span>

        <div
          className="flex items-center justify-center gap-5 sm:gap-7"
          aria-label="Social media links"
        >
          <Link
            href={contactsUrl.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
            aria-label="Visit Ese Curtis Github"
          >
            <Github size={17} aria-hidden="true" />
          </Link>
          <Link
            href={contactsUrl.email}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
            aria-label="Send email to Ese Curtis"
          >
            <Mail size={17} aria-hidden="true" />
          </Link>
          <Link
            href={contactsUrl.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
            aria-label="Follow Ese Curtis on Instagram"
          >
            <Instagram size={17} aria-hidden="true" />
          </Link>
          <Link
            href={contactsUrl.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60"
            aria-label="Follow Ese Curtis on Twitter"
          >
            <Twitter size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
