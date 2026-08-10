import { FitText } from "../atoms/";
import Image from "next/image";

export const Hero = () => {
  const isHub = process.env.NEXT_PUBLIC_ENV;
  const hubDatails = [
    "/001/detail2.png",
    "/001/detail.png",
    "/001/detail3.png",
  ];
  const details = ["/detail2.png", "/detail.png", "/detail3.png"];

  const resolveDetails = () => (isHub ? hubDatails : details);

  return (
    <div className="w-full bg-orange-50 flex flex-col justify-start items-center p-10 pt-0 relative h-[calc(100vh-5rem)]">
      <FitText className="text-black font-bold shrink-0">
        PATEK PHILIPPE
      </FitText>
      <div className="w-full h-full flex">
        <div className=" flex-1 text-black flex flex-col gap-3 justify-end">
          <p className="max-w-96">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
            sint ea repudiandae dolorum veritatis magni suscipit.
          </p>
          <button className="px-4 py-2 bg-black rounded-r-full text-white w-fit cursor-pointer">
            Ver mas
          </button>
        </div>
        <div className=" flex-1 flex flex-col gap-5 justify-end items-end cursor-pointer">
          {resolveDetails().map((e, i) => (
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
        src={isHub ? "/001/HeroPic.png" : "/HeroPic.png"}
        width={2000}
        height={2000}
        priority
        alt=""
        className="absolute bottom-5 left-1/2 -translate-x-1/2 h-full object-contain max-w-3xl object-bottom"
      />
    </div>
  );
};
