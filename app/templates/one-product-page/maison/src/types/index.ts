interface Navbar {
  logo: string;
  optionsNav: { label: string; path: string }[];
}

interface Hero {
  title: string;
  heroImg: string;
  cta: {
    paragraph: string;
    button: string;
  };
  productImg: [string, string, string];
}

interface WhatIs {
  title: string;
  paragraph: string;
}

interface ProductDetail {
  mainImg: string;
  texts: {
    headLine: string;
    title: string;
    points: {
      title: string;
      text: string;
    }[];
  };
  logoPic: string;
}
