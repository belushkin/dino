import kaboom from "kaboom";

export const k = kaboom({
  width: 1000,
  height: 220,
  background: [0, 0, 0],
  root: document.querySelector("body > div > div.game"),
});

export default k;
