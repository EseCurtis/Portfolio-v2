import { PropsWithChildren } from "react";

export function AbrasiveMask({
  position = "fixed"
}: {
  position?: "fixed" | "absolute";
}) {
  return (
    <div
      className=" top-0 left-0 size-full "
      style={{
        background: `url(./media/framernoise.png)`,
        backgroundAttachment: "fixed",
        mixBlendMode: "multiply",
        opacity: 0.7,
        filter: ` brightness(0.5) saturate(0.5)`,
        position
      }}
    />
  );
}

export function AbrasiveMasking({ children }: PropsWithChildren) {
  return (
    <div
      className="absolute top-0 left-0 size-full"
      style={{
        filter: `contrast(1.3) brightness(1.2)`
      }}
    >
      <div className="relative size-full">
        <div
          className="absolute top-0 left-0 size-full "
          style={{ filter: `contrast(0.4)` }}
        >
          {children}
        </div>

        <AbrasiveMask />
      </div>
    </div>
  );
}
