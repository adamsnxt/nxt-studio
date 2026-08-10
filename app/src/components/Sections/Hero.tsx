"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { spring } from "../../utils";
import { useRouter } from "next/navigation";

const categories = [
  { label: "Deporte", path: "" },
  { label: "Mascotas", path: "" },
  { label: "Autos", path: "" },
  { label: "Super", path: "" },
  { label: "Muebles", path: "" },
];

const banners = [
  {
    img: "/banners/demo.png",
    alt: "Futuristic design",
    path: "/hola",
  },
  {
    img: "/banners/demo2.png",
    alt: "Chino",
    path: "",
  },
  {
    img: "/banners/demo3.png",
    alt: "Chino",
    path: "",
  },
  {
    img: "/banners/demo4.png",
    alt: "Chino",
    path: "",
  },
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter();

  const changeBanner = (newDirection: number) => {
    setDirection(newDirection);

    setCurrent((prev) => {
      const next = prev + newDirection;

      if (next < 0) return banners.length - 1;
      if (next >= banners.length) return 0;

      return next;
    });
  };

  const handleRedirect = (path: string) => {
    if (!path) return;

    router.push(path);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      changeBanner(1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered]);

  return (
    <section className="w-full flex flex-col justify-start items-start gap-3 px-3">
      <div className="w-full rounded-4xl flex gap-3">
        <div className="w-full bg-background/30 border border-foreground/20 flex-1 rounded-4xl p-8 gap-3 flex flex-col">
          <h1 className="text-3xl font-light">Categorias</h1>

          <div className="flex flex-col text-xl gap-3">
            {categories.map((category) => (
              <motion.p
                key={category.label}
                initial="rest"
                whileHover="hover"
                className="
    bg-foreground/2
    border border-foreground/10
    p-3
    rounded-2xl
    cursor-pointer
    relative
    overflow-hidden
  "
                onClick={() => handleRedirect(category.path)}
              >
                <motion.span
                  variants={{
                    rest: {
                      opacity: 0,
                    },
                    hover: {
                      opacity: 1,
                    },
                  }}
                  transition={spring}
                  className="
      absolute
      inset-0
      -bg-linear-90
      from-background
      to-orange-500
    "
                />

                <span className="relative z-10">{category.label}</span>
              </motion.p>
            ))}
          </div>
        </div>

        <div
          className="w-full h-auto max-w-5xl relative aspect-video overflow-hidden rounded-4xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={banners[current].path || banners[current].img}
              custom={direction}
              className="absolute inset-0"
              variants={{
                enter: (direction: number) => ({
                  x: direction > 0 ? "100%" : "-100%",
                  opacity: 0.7,
                  scale: 0.98,
                }),

                center: {
                  x: 0,
                  opacity: 1,
                  scale: 1,
                },

                exit: (direction: number) => ({
                  x: direction > 0 ? "-100%" : "100%",
                  opacity: 0.7,
                  scale: 0.98,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={spring}
            >
              <Image
                src={banners[current].img}
                alt={banners[current].alt}
                fill
                priority={current === 0}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className={`object-cover rounded-4xl ${
                  banners[current].path ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={() => handleRedirect(banners[current].path)}
              />
            </motion.div>
          </AnimatePresence>

          <BannerArrow direction="left" onClick={() => changeBanner(-1)} />

          <BannerArrow direction="right" onClick={() => changeBanner(1)} />
        </div>

        <div className="w-full bg-background/30 border border-foreground/20 flex-1 rounded-4xl p-8" />
      </div>
    </section>
  );
};

interface BannerArrowProps {
  direction: "left" | "right";
  onClick: () => void;
}

const BannerArrow = ({ direction, onClick }: BannerArrowProps) => {
  const isLeft = direction === "left";

  return (
    <div
      className={`
        w-20 h-20
        bg-background
        absolute
        top-1/2
        ${isLeft ? "left-0 rounded-r-full" : "right-0 rounded-l-full"}
        -translate-y-1/2
        flex justify-center items-center
        z-20
      `}
    >
      <div
        className={`
          w-10 h-10
          absolute
          -top-10
          ${isLeft ? "left-0" : "right-0"}
          bg-background
        `}
        style={{
          background: isLeft
            ? "radial-gradient(circle at top right, transparent 70%, var(--background) 71%)"
            : "radial-gradient(circle at top left, transparent 70%, var(--background) 71%)",
        }}
      />

      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{
          scale: 1.04,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        transition={spring}
        aria-label={isLeft ? "Banner anterior" : "Banner siguiente"}
        className="
          w-15 h-15
          rounded-full
          bg-background/30
          border border-foreground/30
          flex justify-center items-center
          cursor-pointer


        "
      >
        {isLeft ? (
          <IoIosArrowBack size={32} />
        ) : (
          <IoIosArrowForward size={32} />
        )}
      </motion.button>

      <div
        className={`
          w-10 h-10
          absolute
          -bottom-10
          ${isLeft ? "left-0" : "right-0"}
          bg-background
        `}
        style={{
          background: isLeft
            ? "radial-gradient(circle at bottom right, transparent 70%, var(--background) 71%)"
            : "radial-gradient(circle at bottom left, transparent 70%, var(--background) 71%)",
        }}
      />
    </div>
  );
};
