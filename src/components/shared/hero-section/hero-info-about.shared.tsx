"use client";

import { FMotion } from "@/src/utils/shared/framer-motion.util.shared";

export function HeroInfoAbout() {
  return (
    <FMotion.div
      initial={{
        mask: "linear-gradient(to left, #000 -20%, transparent 20%)",
        opacity: 0.3
      }}
      animate={{
        mask: "linear-gradient(to left, #000 100%, transparent 100%)",
        opacity: 1
      }}
      transition={{
        delay: 0.4,
      
      }}
      className="flex justify-end overflow-clip bottom-32 right-20 absolute p-3 border-r max-w-[400px] z-10 max-sm:right-05-mg max-sm:bottom-30 max-sm:max-w-[70vw]"
    >
      <p className="max-sm:text-xs">
        4+ Years of experience. Specialized in building products, while ensuring
        a seamless web experience for clients across africa.
      </p>
    </FMotion.div>
  );
}
