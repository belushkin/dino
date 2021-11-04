import k from "./kaboom";

import floor, {realFloor} from "./src/floor";

const DINO_POSITION_X = 0;
const DINO_POSITION_Y = 129;
const JUMP_FORCE = 800;

let floor_initialized = false;

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
  }

  dino.play("idle");

  if (start.exists()) {
    destroy(start);
  }

  if (dino.grounded()) {
    dino.jump(JUMP_FORCE);
  }
});

dino.on("ground", () => {
  if (floor_initialized) {
    dino.play("run");
  }
});

// Init floor
realFloor();
