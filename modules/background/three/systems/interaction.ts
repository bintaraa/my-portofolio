import { MouseState } from "../types";

export const mouse: MouseState = { x: 0, y: 0 };

export function setupInteraction() {
  window.addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}