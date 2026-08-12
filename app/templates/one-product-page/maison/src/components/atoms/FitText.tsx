"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

interface FitTextProps {
  children: ReactNode;
  className?: string;
}

export function FitText({ children, className = "" }: FitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [fontSize, setFontSize] = useState(16);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const fit = () => {
      const availableWidth = container.clientWidth;

      if (!availableWidth) return;

      let size = parseFloat(getComputedStyle(text).fontSize);

      for (let i = 0; i < 10; i++) {
        text.style.fontSize = `${size}px`;

        const textWidth = text.getBoundingClientRect().width;

        if (!textWidth) return;

        const ratio = availableWidth / textWidth;

        if (Math.abs(1 - ratio) < 0.001) break;

        size *= ratio;
      }

      setFontSize(size);
    };

    fit();

    const observer = new ResizeObserver(fit);
    observer.observe(container);

    return () => observer.disconnect();
  }, [children]);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <span
        ref={textRef}
        style={{
          fontSize,
          lineHeight: 1,
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
      >
        {children}
      </span>
    </div>
  );
}
