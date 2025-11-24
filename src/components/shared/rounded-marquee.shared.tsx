"use client";
import ReactCurvedText from "react-curved-text";

export function RoundedMarquee() {
  const size = 120;
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <ReactCurvedText
      width={size}
      height={size}
      cx={size / 2}
      cy={size / 2}
      rx={size / 2}
      ry={size / 2}
      startOffset={100}
      reversed={false}
      text="Ese.szn • Follow Me On Twitter(X)"
      textProps={{
        style: { fontSize: 14, color: "#ffffff" },
        color: "#fff",
        fontFamily: "var(--font-mona-sans)",
        fontStretch: "expanded",
        fontWeight: "bold"
      }}
      textPathProps={null}
      tspanProps={null}
      ellipseProps={null}
      svgProps={null}
    />
  );
}
