"use client";

import ReactLenis from "lenis/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ScrollProviderProps {
  isNotTop: boolean;
  isBrowserActive: boolean;
  setIsBrowserActive: Dispatch<SetStateAction<boolean>>;
  searching: boolean;
  setSearching: Dispatch<SetStateAction<boolean>>;
}

const Scroll = createContext<ScrollProviderProps | null>(null);

const getStoredBoolean = (key: string, fallback = false) => {
  if (typeof window === "undefined") return fallback;
  const value = localStorage.getItem(key);
  if (value === null) return fallback;
  return value === "true";
};

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNotTop, setIsNotTop] = useState(false);
  const [isBrowserActive, setIsBrowserActiveState] = useState(false);
  const [searching, setSearching] = useState(false);

  const setIsBrowserActive: Dispatch<SetStateAction<boolean>> = (value) => {
    setIsBrowserActiveState((previous) => {
      const next = typeof value === "function" ? value(previous) : value;
      localStorage.setItem("isBrowserActive", String(next));
      return next;
    });
  };

  useEffect(() => {
    const storedIsBrowserActive = getStoredBoolean("isBrowserActive", false);

    setIsBrowserActiveState(storedIsBrowserActive);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY > 0;

      setIsNotTop(value);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Scroll.Provider
      value={{
        isNotTop,
        isBrowserActive,
        setIsBrowserActive,
        searching,
        setSearching,
      }}
    >
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
