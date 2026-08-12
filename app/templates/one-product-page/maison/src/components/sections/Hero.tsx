import { FitText } from "../atoms/";
import Image from "next/image";

export const Hero = ({ data }: { data: Hero }) => {
  return (
    <div className="w-full bg-orange-50 flex flex-col justify-start items-center p-10 pt-0 relative h-[calc(100vh-5rem)]">
      <FitText className="text-black font-bold shrink-0">{data.title}</FitText>
      <div className="w-full h-full flex">
        <div className=" flex-1 text-black flex flex-col gap-3 justify-end">
          <p className="max-w-96">{data.cta.paragraph}</p>
          <button className="px-4 py-2 bg-black rounded-r-full text-white w-fit cursor-pointer">
            {data.cta.button}
          </button>
        </div>
        <div className=" flex-1 flex flex-col gap-5 justify-end items-end cursor-pointer">
          {data.productImg.map((e, i) => (
            <div
              className="bg-orange-50 max-w-40 aspect-square w-full flex justify-center items-center shadow"
              key={i}
            >
              <Image
                src={e}
                alt=""
                className="w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
      <Image
        src={data.heroImg}
        width={2000}
        height={2000}
        priority
        alt=""
        className="absolute bottom-5 left-1/2 -translate-x-1/2 h-full object-contain max-w-3xl object-bottom"
      />
    </div>
  );
};
