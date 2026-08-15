import Image from "next/image";

export const Navbar = ({ data }: { data: Navbar }) => {
  return (
    <div className="w-full sticky bg-orange-50 h-20 top-0 left-0 border-b border-neutral-300 flex justify-center items-center px-5 z-40">
      <Image
        src={data.logo}
        width={200}
        height={200}
        alt=""
        className="md:w-10 w-5 md:h-10 h-5"
      />
      <div className="flex gap-5 justify-center items-center text-black/50 flex-1">
        {data.optionsNav.map((e, i) => (
          <div key={i} className="cursor-pointer text-xs md:text-base">
            {e.label}
          </div>
        ))}
      </div>
    </div>
  );
};
