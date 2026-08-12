import type { ComponentType } from "react";

export interface LandingProps {
  assetBasePath: string;
}

type TemplateModule = {
  default: ComponentType<LandingProps>;
};

type Template = {
  loader: () => Promise<TemplateModule>;
  assets: string;
};

export const templates: Record<string, Template> = {
  maison: {
    loader: () =>
      import("@/app/templates/one-product-page/maison/src/components/Landing"),
    assets: "/maison",
  },
};
