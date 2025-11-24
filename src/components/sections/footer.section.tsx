export function FooterSection() {
  return (
    <div className="bg-gray-700 p-3  relative w-full px-mg mt-[70px]">
      <div className="flex items-center z-10 relative justify-between gap-2">
        <span>
          &copy; Ese Curtis • <b>2022 - {new Date().getFullYear()}</b>
        </span>
      </div>
    </div>
  );
}
