import {
  contactsUrl,
  quickLinks
} from "@/src/utils/shared/constants.util.shared";
import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function NavbarSection() {
  return (
    <nav className="top-0 left-0 z-11 fixed  w-full h-[70px] flex gap-2 justify-between items-center mg-x">
      <div>
        <h1 className="text-3xl font-extrabold font-mona-sans-exp">
          Ese Curtis
        </h1>
      </div>
      <div className="flex">
        <div className=" gap-7 flex items-center text-sm font-mona-sans-exp">
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

        <div className="py-7 h-full mx-5">
          <span>•</span>
        </div>

        <div className=" gap-7 flex items-center">
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
