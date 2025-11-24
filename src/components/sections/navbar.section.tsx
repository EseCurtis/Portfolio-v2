import { Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export function NavbarSection() {
  return (
    <nav className="top-0 left-0 z-11 fixed  w-full h-[70px] flex gap-2 justify-between items-center mg-x">
      <div>
        <h1 className="text-3xl font-extrabold font-mona-sans-exp">Ese Curtis</h1>
      </div>
      <div className="flex">
        <div className=" gap-12 flex items-center text-sm">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
          <Link href={"#"}>Blog</Link>
        </div>

        <div className="py-7 h-full mx-5">
          <div className="border-r h-full border-white/30" />
        </div>

        <div className=" gap-7 flex items-center">
          <Mail size={17} />
          <Instagram size={17} />
          <Twitter size={17} />
        </div>
      </div>
    </nav>
  );
}
