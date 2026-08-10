import Image from "next/image";
const options = [
  { label: "AboutUs", path: "#" },
  { label: "Collection", path: "#" },
  { label: "Design inspiration", path: "#" },
];
export const Navbar = () => {
  const isHub = process.env.NEXT_PUBLIC_ENV;
  return (
    <div className="w-full sticky bg-orange-50 h-20 top-0 left-0 border-b border-neutral-300 flex justify-center items-center px-5 z-40">
      <Image
        src={isHub ? "/001/PatekLogo.png" : "/PatekLogo.png"}
        width={200}
        height={200}
        alt=""
        className="w-10 h-10"
      />
      <div className="flex gap-5 justify-center items-center text-black/50 flex-1">
        {options.map((e, i) => (
          <div key={i} className="cursor-pointer">
            {e.label}
          </div>
        ))}
      </div>
    </div>
  );
};
