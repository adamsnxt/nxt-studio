{
  /*LO QUE ESTA DENTRO DE ESTOS COMENTARIOS SON TYPES COPIADOS DE REACTICONS 
  SI LOS ICONOS DEJAN DE FUNCIONAR ESTO ES LO PRIMERO A REVISAR*/
}
interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
type IconType = (props: IconBaseProps) => React.ReactNode;

{
  /*LO QUE ESTA DENTRO DE ESTOS COMENTARIOS SON TYPES COPIADOS DE REACTICONS 
  SI LOS ICONOS DEJAN DE FUNCIONAR ESTO ES LO PRIMERO A REVISAR*/
}
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

interface ProductMoreDetail {
  headLine: string;
  title: string;
  points: { icon: IconType; title: string; text: string }[];
}
