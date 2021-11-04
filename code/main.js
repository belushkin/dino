import k from "./kaboom";

import floor, {realFloor} from "./src/floor";

const DINO_POSITION_X = 0;
const DINO_POSITION_Y = 129;
const JUMP_FORCE = 800;

let floor_initialized = false;

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

gravity(2400);

// Begin of the game character
const start = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  sprite("start"),
]);

// Draw dino at the same time over start dino
const dino = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  area(),
  body(),
  sprite("dino"),
]);


// jump when player presses "space" key
keyPress("space", () => {
  // Initialize floor on first space pressed
  if (!floor_initialized) {
    floor();
    floor_initialized = true;
    dino.play("run");
  }
  destroy(start);
  if (dino.grounded()) {
    dino.jump(JUMP_FORCE);
  }
});



// Init floor
realFloor();

// floor.play("move");