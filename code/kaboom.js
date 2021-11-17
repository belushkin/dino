import kaboom from "kaboom";

export const k = kaboom({
  background: [255, 255, 255],
  width: IS_HIDPI == true ? 1200 : 600,
  height: IS_HIDPI == true ? 280 : 150,
  root: document.querySelector("body > div > div#game_canvas"),
});

export default k;
