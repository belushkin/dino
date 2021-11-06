import kaboom from "kaboom";

export const k = kaboom({
  width: 1000,
  height: 220,
  background: [ 255, 255, 0, ],
  // Explain this
  root: document.querySelector("body > div > div.game")
});

export default k;
