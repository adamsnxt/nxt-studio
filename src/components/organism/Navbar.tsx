"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useOnScroll } from "../../providers/ScrollProvider";
import React, { useEffect, useState } from "react";
import { spring } from "../../utils";
import { usePathname } from "next/navigation";

const options = [
  { label: "Contacto", path: "" },
  { label: "Quienes somos", path: "" },
  { label: "Como funciona", path: "" },
];

export const Navbar = () => {
  const { isNotTop, isBrowserActive } = useOnScroll();
  const [hovered, setHovered] = useState<number | null>(null);
  const route = usePathname();

  useEffect(() => {
    console.log(route);
  });
  if (route.startsWith("/preview")) return;
  return (
    <nav className="w-full sticky top-0 left-0 p-3 flex justify-center items-center z-50 ">
      <motion.nav
        className="w-full h-20 bg-background/30 backdrop-blur-3xl flex justify-center items-center border border-foreground/20 rounded-4xl px-6"
        initial={false}
        animate={{
          maxWidth: isNotTop ? 1024 : 1920,
        }}
        transition={spring}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isBrowserActive ? (
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
              />
            </motion.div>
          ) : (
            <motion.div
              key="navigation"
              className="w-full flex items-center"
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
              <motion.div layout className="w-full" transition={spring}>
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
                        className="cursor-pointer whitespace-nowrap"
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

              <div className="w-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </nav>
  );
};
