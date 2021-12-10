import React from "react";

import { Sketch } from "@/lib/types/sketch";
import { CanvasProps } from "./Canvas.types";

export const Canvas: React.VFC<CanvasProps> = ({ slug }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    Promise.all([
      import(`@/works/${slug}`).then((m) => m.sketch as Sketch),
      import("p5").then((m) => m.default),
    ]).then(([sketch, p5]) => {
      if (!ref.current) return;
      ref.current.textContent = "";
      new p5(sketch, ref.current);
    });
  }, [ref, slug]);

  return <div ref={ref} role="img"></div>;
};
