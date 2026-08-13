import { Explorer, Hero } from "../src/components/Sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={"/bg/bg.png"}
        alt="Bg"
        width={1920}
        height={1920}
        priority
        className="fixed top-0 left-0 -z-1 w-full h-full object-cover object-right hidden dark:block"
      />
      <Image
        src={"/bg/bgL.png"}
        alt="Bg"
        width={1920}
        height={1920}
        priority
        className="fixed top-0 left-0 -z-1 w-full h-full object-cover object-right dark:hidden"
      />
      <Hero />
      <Explorer />
    </>
  );
}
