"use client";

import ReactLenis from "lenis/react";
import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScrollProviderProps {
  isNotTop: boolean;
  isBrowserActive: boolean;
  setIsBrowserActive: Dispatch<React.SetStateAction<boolean>>;
}

const Scroll = createContext<ScrollProviderProps | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNotTop, setIsNotTop] = useState(false);
  const [isBrowserActive, setIsBrowserActive] = useState(false);

  useEffect(() => {
    const reviewTop = () => {
      setIsNotTop(window.scrollY > 0);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", reviewTop);

    return () => {
      window.removeEventListener("scroll", reviewTop);
    };
  }, []);

  return (
    <Scroll.Provider value={{ isNotTop, isBrowserActive, setIsBrowserActive }}>
      <ReactLenis root>{children}</ReactLenis>
    </Scroll.Provider>
  );
};

export const useOnScroll = () => {
  const context = useContext(Scroll);

  if (!context) {
    throw new Error("useOnScroll solo puede usarse dentro de ScrollProvider");
  }

  return context;
};
