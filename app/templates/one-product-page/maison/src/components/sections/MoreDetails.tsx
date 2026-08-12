export const MoreDetails = ({ data }: { data: ProductMoreDetail }) => {
  return (
    <section
      id="more-details"
      className="w-full border-t border-neutral-300 flex flex-col justify-center items-center p-10 bg-orange-50 gap-10 text-black"
    >
      <div className="">
        <p className="text-center">{data.headLine}</p>
        <h1 className="text-5xl font-bold uppercase">{data.title}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full justify-items-center max-w-5xl">
        {data.points.map((p, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 justify-center items-center max-w-60"
          >
            {<p.icon size={32} />}
            <h2 className="text-center text-xl font-bold uppercase">
              {p.title}
            </h2>
            <p className="text-center">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
