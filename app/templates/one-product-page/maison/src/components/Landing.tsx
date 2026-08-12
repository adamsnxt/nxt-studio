import { Navbar } from "./organism";
import { Detail, Hero, WhatIs, MoreDetails } from "./sections";
import data from "../../data.json";
import { IconType } from "react-icons";
import { GiPolarStar } from "react-icons/gi";

interface LandingProps {
  assetBasePath?: string;
}

const icons: Record<string, IconType> = {
  GiPolarStar,
};

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

  const productMoreDetail: ProductMoreDetail = {
    ...data.productMoreDetail,
    points: data.productMoreDetail.points.map((e) => ({
      ...e,
      icon: icons[e.icon],
    })),
  };

  return (
    <>
      <Navbar data={navbar} />
      <Hero data={hero} />
      <WhatIs data={data.whatIs} />
      <Detail data={detail} />
      <MoreDetails data={productMoreDetail} />
    </>
  );
};

export default Landing;
