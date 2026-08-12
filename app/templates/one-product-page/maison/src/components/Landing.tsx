import { Navbar } from "./organism";
import { Detail, Hero, WhatIs } from "./sections";
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

  const navbar: Navbar = {
    ...data.navbar,
    logo: asset(data.navbar.logo),
  };

  const detail: ProductDetail = {
    ...data.productDetail,
    mainImg: asset(data.productDetail.mainImg),
    logoPic: asset(data.productDetail.logoPic),
  };

  return (
    <>
      <Navbar data={navbar} />
      <Hero data={hero} />
      <WhatIs data={data.whatIs} />
      <Detail data={detail} />
    </>
  );
};

export default Landing;
