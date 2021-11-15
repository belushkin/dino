import kaboom from "kaboom";

export const k = kaboom({
  background: [0, 0, 0],
  root: document.querySelector("body > div > div#game_canvas"),
});

export default k;
