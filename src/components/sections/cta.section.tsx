import {
  contactsUrl
} from "@/src/utils/shared/constants.util.shared";
import { Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="z-10  w-full flex flex-col items-center justify-center py-[20vh] max-sm:pb-mg">
      <h3 className="text-4xl font-mona-sans-exp font-bold text-center max-sm:text-5xl max-sm:w-full">
        Do You Have Any Ideas?
      </h3>
      <p className="text-center max-sm:px-mg max-sm:text-white/70">
        Whether you’re creating something new or improving what you already
        have, <br />I can help elevate your product experience. Don’t hesitate
        to get in touch.
      </p>

      <div className=" gap-7 flex items-center mt-mg max-sm:flex-col">
        <Link href={contactsUrl.email} className="flex gap-3 items-center hover:underline">
          <Mail size={17} />
          <span className="font-mona-sans-exp">curtisese52@gmail.com</span>
        </Link>
        <span className="max-sm:hidden">•</span>
        <Link href={contactsUrl.phone} className="flex gap-3 items-center hover:underline">
          <Phone size={17} />
          <span className="font-mona-sans-exp">+234 81 360 468 62</span>
        </Link>
        <span className="max-sm:hidden">•</span>
        <div className="flex gap-7">
          <Link href={contactsUrl.instagram} className="hover:opacity-70">
            <Instagram size={24} />
          </Link>
          <span>•</span>
          <Link href={contactsUrl.twitter} className="hover:opacity-70">
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
