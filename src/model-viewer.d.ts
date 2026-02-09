import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          autoplay?: boolean;
          loop?: boolean;
          exposure?: string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          "background-blur"?: string;
          "camera-target"?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
