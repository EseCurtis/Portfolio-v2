interface Props {
  title: string;
  role: string;
  duration: string;
  description: string;
}

export function ExperienceListItem({
  title,
  role,
  duration,
  description
}: Props) {
  return (
    <div className="flex flex-col relative">
      <div
        style={{
          mask: "linear-gradient( transparent 40%, #000)"
        }}
        className="border-l border-b h-[calc(100%+60px)] w-7 absolute bottom-mg -left-mg border-white/50 rounded-bl-xl"
      />

      <b className="text-md text-white/70 font-mona-sans-exp">{title}</b>
      <b className="text-xl mt-2">
        {role} • <span className="text-sm text-white/70">{duration}</span>
      </b>
      <p
        className="text-white/70 mt-3"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
