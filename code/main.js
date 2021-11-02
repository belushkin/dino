import kaboom from "kaboom";

// initialize context
kaboom({
  width: 680,
  height: 120,
  background: [ 255, 255, 255, ],
  // Explain this
  root: document.querySelector("body > div > div.game")
});

// Explain this
// loadSpriteAtlas("sprites/dino.png", {
//     "dino": {
//         x: 1340,
//         y: 3,
//         width: 527,
//         height: 95,
//         sliceX: 6,
//         anims: {
//             idle: { from: 0, to: 1 },
//             run: { from: 2, to: 3 },
//             hit: { from: 4, to: 5 },
//         },
//     },
// });
loadSpriteAtlas("sprites/dino.png", "sprites/dino.json");

const dino = add([
    // pos(50, 50),
    sprite("dino"),
]);

dino.play("run");