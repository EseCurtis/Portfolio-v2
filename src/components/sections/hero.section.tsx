import Image from "next/image";
import Link from "next/link";
import { RoundedMarquee } from "../shared/rounded-marquee.shared";

export function HeroSection() {
  return (
    <div className="flex min-h-screen relative w-full items-center  justify-center bg-background flex-col">
      <div className="z-10">
        <h1 className="font-mona-sans-exp font-bold text-7xl">
          Software Engineer
        </h1>
        <h2 className="font-mona-sans">
          Building exceptional user experiences for the passion
        </h2>
      </div>

      <div
        className="top-32 left-20  absolute size-[400px] overflow-hidden rounded-[70px]"
        style={{
          mask: "linear-gradient(#000 10%, transparent 90%)"
        }}
      >
        <Image
          src="/media/ese-profile-2.png"
          height={200}
          width={200}
          alt="WTF-image"
          className="size-full"
        />
      </div>

      <div
        className="-bottom-32 right-10 opacity-70 absolute size-[500px] overflow-hidden rounded-[70px]"
        style={{
          mask: "linear-gradient(#000 10%, transparent 90%)"
        }}
      >
        <Image
          src="/media/WTF.jpg"
          height={200}
          width={200}
          alt="WTF-image"
          className="size-full"
        />
      </div>

      <div className="absolute bottom-[120px] z-10 left-[120px] bg-gray-600 rounded-full">
        <Link href="#" className=" relative overflow-hidden  size-[120px] group">
          <Image
              src="/media/ese-profile-2.png"
              height={200}
              width={200}
              alt="WTF-image"
              className="size-full group-hover:rotate-30 group-hover:scale-[1.5] group-hover:opacity-0  transition-all absolute top-0 left-0 rounded-full overflow-hidden"
            />

            <Image
              src="/media/WTF.jpg"
              height={200}
              width={200}
              alt="WTF-image"
              className="size-full opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 rounded-full overflow-hidden"
            />
          <div className="invert animate-[spin_14s_linear_infinite] scale-[1.3]">
            <RoundedMarquee />
          </div>
        </Link>
      </div>
    </div>
  );
}
