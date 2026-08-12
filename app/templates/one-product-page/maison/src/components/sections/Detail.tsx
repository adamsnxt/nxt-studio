import Image from "next/image";

export const Detail = ({ data }: { data: ProductDetail }) => {
  return (
    <section
      id="detail"
      className="
    w-full
    bg-orange-50
    border-t border-neutral-300
    flex

  "
    >
      {/* IZQUIERDA */}
      <div className="relative flex justify-center flex-2">
        <Image
          width={1535}
          height={1024}
          alt=""
          src={data.mainImg}
          className="w-full h-auto"
        />
      </div>

      <div className=" w-full flex-1 relative p-5 text-black">
        <div className="w-full h-full max-w-120 flex flex-col gap-5">
          <div>
            <p>{data.texts.headLine}</p>

            <h1 className="text-5xl font-bold">{data.texts.title}</h1>
          </div>
          <div className="flex flex-col gap-3">
            {data.texts.points.map((p, i) => {
              return (
                <div key={i} className="flex gap-3  items-center">
                  <div>
                    <p className="text-lg font-bold">- {p.title}</p>
                    <p>{p.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src={data.logoPic}
          width={200}
          height={200}
          alt=""
          className="absolute bottom-5 right-5 w-15 aspect-square"
        />
      </div>
    </section>
  );
};
