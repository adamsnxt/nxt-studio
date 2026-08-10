import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "../src/providers/ScrollProvider";
import { Navbar } from "../src/components/organism";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}  w-screen antialiased overflow-x-hidden scrollbar-none`}
    >
      <body className="flex w-full flex-col relative">
        <ScrollProvider>
          <Navbar />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
