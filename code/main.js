import k from "./kaboom";

import { deck } from "./components/floor";
import handlers from "./components/handlers";
import {
  HALF_GAMEOVER_WIDTH,
  DINO_POSITION_X,
  DINO_POSITION_Y,
  DINO_START_POSITION_X,
  HALF_ICON_WIDTH,
  ICON_HEIGHT,
  GAMEOVER_HEIGHT,
  REAL_FLOOR_POSITION_Y,
  START_FLOOR_POSITION_X,
  DINO_SCALE_AREA,
} from "./utils/constants";

// Global variable for global pause
window.pauseGame = false;

if (IS_HIDPI == true) {
  loadSpriteAtlas("sprites/dino_big.png", "sprites/dino_big.json");
} else {
  loadSpriteAtlas("sprites/dino_small.png", "sprites/dino_small.json");
}

// Load sounds
loadSound("jump", "sounds/jump.ogx");
loadSound("hit", "sounds/hit.ogx");

gravity(2400);

layers(["ui", "game"], "game");

// Begin of the game character
add([
  pos(DINO_START_POSITION_X, DINO_POSITION_Y),
  sprite("start"),
  layer("ui"),
  "start_position",
]);
add([
  pos(START_FLOOR_POSITION_X, REAL_FLOOR_POSITION_Y),
  sprite("start_floor"),
  layer("ui"),
  "start_floor",
]);

const gameover = add([
  pos(width() / 2 - HALF_GAMEOVER_WIDTH, GAMEOVER_HEIGHT),
  sprite("gameover"),
  layer("game"),
  "gameover",
]);
gameover.hidden = true;

const icon = add([
  pos(width() / 2 - HALF_ICON_WIDTH, ICON_HEIGHT),
  sprite("icon"),
  layer("game"),
  "gameovericon",
]);
icon.hidden = true;

// Draw dino at the same time over start dino
const dino = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  area({ scale: DINO_SCALE_AREA }),
  body(),
  sprite("dino"),
  "dino",
]);

// Load handlers
handlers(dino);
deck();
