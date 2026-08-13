"use client";

import { useEffect, useState } from "react";

export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!window) return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    window.removeEventListener;
  }, []);

  return isMobile;
};
