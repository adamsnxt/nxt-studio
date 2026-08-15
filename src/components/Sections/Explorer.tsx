"use client";

import { useEffect, useRef } from "react";
import { useOnScroll } from "../../providers/ScrollProvider";
import { motion } from "framer-motion";
import { spring } from "../../utils";
import Link from "next/link";
import ReactLenis from "lenis/react";
import Image from "next/image";
import { UseIsMobile } from "@/src/hooks";

const templates = [
  {
    img: "/maison/demo.png",
    alt: "Pagina de un producto",
    path: "/preview/maison",
  },
];

export const Explorer = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { isBrowserActive, setIsBrowserActive, searching } = useOnScroll();

  const isMobile = UseIsMobile();

  useEffect(() => {
    const checkSticky = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();

      setIsBrowserActive(top <= 0);
    };

    window.addEventListener("scroll", checkSticky);

    return () => {
      window.removeEventListener("scroll", checkSticky);
    };
  }, [setIsBrowserActive]);

  return (
    <section
      className="sticky top-0 left-0 w-full h-dvh flex flex-col gap-3 p-3"
      id="explorer"
      ref={sectionRef}
    >
      <div className="w-full">
        <div className="w-full h-20 flex gap-3 justify-center items-center" />
      </div>

      <div className="absolute w-full h-26 top-0 left-0 flex gap-3 pt-3 px-3">
        <div className="flex-1 h-full w-full font-bold flex rounded-t-4xl bg-background/30 relative border border-b-0 border-r-0 border-foreground/20 justify-center items-center px-5 md:p-0">
          <div
            className="absolute w-8 h-8 -right-8 bottom-0 z-20"
            style={{
              background:
                "radial-gradient(circle at top right, transparent 70%, color-mix(in oklab, var(--foreground) 20%, transparent) 71%, color-mix(in oklab, var(--background) 30%, transparent) 74%)",
            }}
          />

          <div className="w-20 h-[calc(100%-1.7rem)] rounded-tr-4xl border-r border-foreground/20 absolute right-0 top-0" />

          <Link href="#explorer">
            <motion.h1
              initial={false}
              animate={{
                opacity: isBrowserActive ? 1 : 0.5,
                fontSize: isMobile
                  ? "1.5rem"
                  : isBrowserActive
                    ? "3.5rem"
                    : "2.5rem",
              }}
              transition={spring}
            >
              Explorar
            </motion.h1>
          </Link>
        </div>

        <div className="max-w-5xl h-full w-full relative">
          <div className="md:w-[calc(100%-1.8rem)] w-[calc(100%-1rem)] h-20 absolute md:left-1/2 right-0 md:right-auto md:-translate-x-1/2 top-full border-t border-foreground/30 rounded-tr-4xl md:rounded-tr-none" />
        </div>

        <div className="flex-1 h-full font-bold md:flex rounded-t-4xl bg-background/30 border border-b-0 border-l-0 relative border-foreground/20 hidden">
          <div
            className="absolute w-8 h-8 -left-8 bottom-0"
            style={{
              background:
                "radial-gradient(circle at top left, transparent 70%, color-mix(in oklab, var(--foreground) 20%, transparent) 71%, transparent 74%)",
            }}
          />

          <div className="w-20 h-[calc(100%-1.7rem)] rounded-t-4xl border-l border-foreground/20 absolute left-0 top-0" />
        </div>
      </div>

      <div className="w-full h-full bg-background/30 border border-t-0 rounded-b-4xl rounded-tr-4xl md:rounded-tr-none relative border-foreground/20 p-3 overflow-hidden">
        <ReactLenis className="w-full h-full rounded-2xl md:rounded-4xl scrollbar-none overflow-y-auto">
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-3">
            {templates.map((template, i) => (
              <Link
                href={template.path}
                className="w-full bg-background/30 border border-foreground/20 rounded-xl md:rounded-3xl flex justify-center items-center overflow-hidden"
                key={i}
              >
                <Image
                  width={1920}
                  height={1080}
                  alt={template.alt}
                  src={template.img}
                  className="w-full object-cover"
                />
              </Link>
            ))}
          </div>
        </ReactLenis>
      </div>
    </section>
  );
};
