import kaboom from "kaboom";

export const k = kaboom({
  background: [255, 255, 255],
  root: document.querySelector("body > div > div#game_canvas"),
});

export default k;
