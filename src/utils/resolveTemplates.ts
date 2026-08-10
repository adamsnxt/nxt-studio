import type { ComponentType } from "react";

type TemplateModule = {
  default: ComponentType;
};

export const templates: Record<string, () => Promise<TemplateModule>> = {
  "001": () =>
    import("@/app/templates/one-product-page/001/src/components/Landing"),
};
