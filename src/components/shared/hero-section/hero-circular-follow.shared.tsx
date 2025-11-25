"use client";

import { contactsUrl } from "@/src/utils/shared/constants.util.shared";
import { FMotion } from "@/src/utils/shared/framer-motion.util.shared";
import Image from "next/image";
import Link from "next/link";
import { RoundedMarquee } from "../common/rounded-marquee.shared";

export function HeroCircularFollow() {
  return (
    <FMotion.div
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      className="absolute bottom-[120px] z-10 left-[120px] bg-gray-600 rounded-full  max-sm:left-mg max-sm:bottom-0  max-sm:scale-[0.7]"
    >
      <Link
        href={contactsUrl.twitter}
        className=" relative  size-[120px] group "
      >
        <Image
          src="/media/ese-profile-2.png"
          height={200}
          width={200}
          alt="Ese Curtis profile photo - Software Engineer"
          className="size-full group-hover:rotate-30 group-hover:scale-[1.5] group-hover:opacity-0  transition-all absolute top-0 left-0 rounded-full overflow-hidden"
        />

        <Image
          src="/media/WTF.jpg"
          height={200}
          width={200}
          alt="Ese Curtis portfolio interactive element"
          className="size-full opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 rounded-full overflow-hidden"
        />
        <div
          className="invert animate-[spin_14s_linear_infinite] scale-[1.3]"
          aria-hidden="true"
        >
          <RoundedMarquee  text={"Ese.szn • Follow Me On Twitter(X)"}/>
        </div>
      </Link>
    </FMotion.div>
  );
}
