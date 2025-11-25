import { HeroBackdropArts } from "../shared/hero-backdrop-arts";
import { HeroCircularFollow } from "../shared/hero-circular-follow.shared";
import { HeroInfoAbout } from "../shared/hero-info-about.shared";

export function HeroSection() {
  return (
    <section
      className="flex min-h-screen  relative w-full items-center  justify-center bg-background flex-col max-sm:overflow-x-hidden max-sm:min-h-[calc(100vh-70px)]"
      aria-label="Hero section"
    >
      <header className="z-10 max-sm:px-mg">
        <h1 className="font-mona-sans-exp font-bold text-7xl max-sm:text-7xl">
          Software Engineer
        </h1>
        <p className="font-mona-sans text-lg">
          Building exceptional user experiences for the passion
        </p>
      </header>

      <HeroInfoAbout />
      <HeroBackdropArts />
      <HeroCircularFollow />
    </section>
  );
}
