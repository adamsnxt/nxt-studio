import { FaArrowRightLong } from "react-icons/fa6";
export const WhatIs = () => {
  return (
    <div className="w-full h-full bg-orange-50 flex justify-start items-center relative text-black p-20 border-t border-b border-neutral-300">
      <div className="w-full ">
        <h1 className="text-5xl max-w-96 font-bold font-huninn">
          DISEÑADO PARA HACERTE SENTIR BIEN
        </h1>
      </div>
      <div className="w-full flex flex-col gap-5 group">
        <p className="max-w-96 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          reiciendis, nihil a non reprehenderit unde officia eum harum omnis
          consequuntur iure magnam neque impedit pariatur hic molestias qui
          sequi doloribus!
        </p>
        <FaArrowRightLong
          size={24}
          className="group-hover:-rotate-45 transition-all duration-300 opacity-50 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
