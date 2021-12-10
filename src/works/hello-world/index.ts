import { Sketch } from "@/lib/types/sketch";

export const title = "Hello, World!";

export const sketch: Sketch = (p) => {
  const WIDTH = 720;
  const HEIGHT = 720;

  p.setup = () => {
    const canvas = p.createCanvas(WIDTH, HEIGHT);
    p.background("white");
    p.rect(0, 0, WIDTH, HEIGHT);
  };

  p.draw = () => {
    p.ellipse(50, 50, 80, 80);
  };
};
