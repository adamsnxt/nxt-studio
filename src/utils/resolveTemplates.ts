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
  "001": {
    loader: () =>
      import("@/app/templates/one-product-page/001/src/components/Landing"),
    assets: "/001",
  },
};
