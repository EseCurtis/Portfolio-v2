"use client";

import { FMotion } from "@/src/utils/shared/framer-motion.util.shared";
import Image from "next/image";

export function HeroBackdropArts() {
  return (
    <>
      <FMotion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="top-32 left-20  absolute size-[400px] overflow-hidden rounded-[70px] max-sm:size-full max-sm:top-[unset] max-sm:bottom-mg max-sm:left-0"
        style={{
          mask: "linear-gradient(#000 10%, transparent 90%)"
        }}
      >
        <Image
          src="/media/ese-profile-2.png"
          height={200}
          width={200}
          alt="Ese Curtis - Software Engineer and Fullstack Developer profile photo"
          className="size-full object-cover"
        />
      </FMotion.div>

      <FMotion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="-bottom-32 right-10 opacity-70 absolute size-[500px] overflow-hidden rounded-[70px]  max-sm:size-[100px]"
        style={{
          mask: "linear-gradient(#000 10%, transparent 90%)"
        }}
      >
        <Image
          src="/media/WTF.jpg"
          height={200}
          width={200}
          alt="Ese Curtis portfolio background image"
          className="size-full"
        />
      </FMotion.div>
    </>
  );
}
