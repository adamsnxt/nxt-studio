import { FaArrowRightLong } from "react-icons/fa6";
export const WhatIs = ({ data }: { data: WhatIs }) => {
  return (
    <div className="w-full h-full bg-orange-50 flex justify-start items-center relative text-black p-20 border-t border-neutral-300">
      <div className="w-full ">
        <h1 className="text-5xl max-w-96 font-bold">{data.title}</h1>
      </div>
      <div className="w-full flex flex-col gap-5 group">
        <p className="max-w-96 text-sm">{data.paragraph}</p>
        <FaArrowRightLong
          size={24}
          className="group-hover:-rotate-45 transition-all duration-300 opacity-50 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
