"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useOnScroll } from "../../providers/ScrollProvider";
import React, { useEffect, useRef, useState } from "react";
import { spring } from "../../utils";
import { usePathname } from "next/navigation";
import { UseIsMobile } from "@/src/hooks";
import Link from "next/link";

const options = [
  { label: "Contacto", path: "" },
  { label: "Quienes somos", path: "" },
  { label: "Como funciona", path: "" },
];

export const Navbar = () => {
  const { isNotTop, isBrowserActive, setSearching, searching } = useOnScroll();
  const [hovered, setHovered] = useState<number | null>(null);
  const route = usePathname();
  const isMobile = UseIsMobile();
  const toWidthRef = useRef<HTMLDivElement | null>(null);
  const [resolveTernaryMax, setResolveTernaryMax] = useState<number>(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const element = toWidthRef.current;

    if (!element) return;

    const updateMaxWidth = () => {
      if (isMobile) {
        if (isBrowserActive) {
          setResolveTernaryMax(element.offsetWidth);
          return;
        }

        if (searching) {
          setResolveTernaryMax(1920);
          return;
        }
      }

      if (searching) {
        setResolveTernaryMax(1024);
        return;
      }

      setResolveTernaryMax(isNotTop ? 1024 : 1920);
    };

    updateMaxWidth();

    const observer = new ResizeObserver(updateMaxWidth);
    observer.observe(element);

    return () => observer.disconnect();
  }, [isMobile, isBrowserActive, isNotTop, searching]);

  if (route.startsWith("/preview")) return;

  return (
    <div
      className={`w-full sticky top-0 left-0 p-3 flex justify-end md:justify-center items-center z-50 gap-3`}
    >
      <div
        className={`h-20 absolute inset-3 flex pointer-events-none gap-3 opacity-0`}
      >
        <div className="flex-1 h-full w-full font-bold flex rounded-t-4xl  relative border border-b-0 border-r-0 border-foreground/20 justify-center items-center px-5 md:p-0 bg-red-600">
          <Link href="#explorer">
            <motion.h1
              initial={false}
              animate={{
                opacity: isBrowserActive ? 1 : 0.5,
                fontSize: isMobile
                  ? "1.5rem"
                  : isBrowserActive && !isMobile
                    ? "3.5rem"
                    : "2.5rem",
              }}
              transition={spring}
            >
              Explorar
            </motion.h1>
          </Link>
        </div>
        <div className="w-full" ref={toWidthRef} />
      </div>
      <motion.div
        className={`w-full h-20  flex justify-center items-center border border-foreground/20 rounded-4xl px-6 bg-background/30 relative overflow-hidden z-20 backdrop-blur-2xl`}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          maxWidth: resolveTernaryMax,
        }}
        transition={spring}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isBrowserActive || searching ? (
            <motion.div
              key="browser"
              initial={{
                opacity: 0,
                y: -6,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 6,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full h-full"
            >
              <input
                type="text"
                className="w-full h-full border-none outline-none text-xl capitalize"
                placeholder="Buscar..."
                onChange={(e) => {
                  const value = e.target.value;

                  setSearch(value);

                  if (value.length > 0) {
                    setSearching(true);
                  }
                }}
                onFocus={() => setSearching(true)}
                onBlur={() => {
                  if (search.length === 0) {
                    setSearching(false);
                  }
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="navigation"
              className={`flex items-center w-full`}
              initial={{
                opacity: 0,
                y: -4,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 4,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                layout
                className="hidden md:block"
                transition={spring}
              >
                LOGO
              </motion.div>

              <div className="flex flex-1 justify-center items-center gap-4">
                {options.map((option, i) => {
                  const isLast = options.length - 1 === i;
                  const isHovered = hovered === i;
                  const isOtherHovered = hovered !== null && !isHovered;

                  return (
                    <React.Fragment key={option.label}>
                      <motion.div
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        animate={{
                          scale: isHovered ? 1.03 : isOtherHovered ? 0.96 : 1,
                          y: isHovered ? -2 : 0,
                          opacity: isOtherHovered ? 0.65 : 1,
                          filter: isOtherHovered ? "blur(2px)" : "blur(0px)",
                        }}
                        transition={{
                          ...spring,
                          fontSize: {
                            type: "spring",
                            stiffness: 220,
                            damping: 26,
                            mass: 0.6,
                          },
                        }}
                        className="cursor-pointer whitespace-nowrap text-xs md:text-base"
                        style={{
                          color: "var(--foregorund)",
                          mixBlendMode: "difference",
                        }}
                      >
                        {option.label}
                      </motion.div>

                      {!isLast && (
                        <motion.span
                          animate={{
                            opacity: isNotTop ? 0.35 : 0.55,
                            scaleY: isNotTop ? 0.8 : 1,
                          }}
                          transition={spring}
                        >
                          |
                        </motion.span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>{" "}
    </div>
  );
};
