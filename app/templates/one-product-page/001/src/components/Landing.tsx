import { Navbar } from "./organism";
import { Hero, WhatIs } from "./sections";
import data from "../../data.json";

interface LandingProps {
  assetBasePath?: string;
}

const Landing = ({ assetBasePath = "" }: LandingProps) => {
  const asset = (path: string) => `${assetBasePath}/${path}`.replace("//", "/");

  const hero: Hero = {
    ...data.hero,
    heroImg: asset(data.hero.heroImg),
    productImg: data.hero.productImg.map(asset) as [string, string, string],
  };

  return (
    <>
      <Navbar />
      <Hero data={hero} />
      <WhatIs data={data.whatIs} />
    </>
  );
};

export default Landing;
