import { Monsieur_La_Doulaise } from "next/font/google";
import "./global.css";
import ReactLenis from "lenis/react";

const doulaise = Monsieur_La_Doulaise({
  variable: "--font-monsieur",
  weight: "400",
  style: "normal",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scrollbar-none">
      <body className={`${doulaise.variable} w-full `}>
        <ReactLenis root>{children}</ReactLenis>
      </body>
    </html>
  );
}
