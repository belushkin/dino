import k from "./kaboom";

import { deck } from "./components/floor";
import handlers from "./components/handlers";

import { getLast5Scores, getLastAll5Scores } from "./utils/api";
import { showchart } from "./utils/chart";

import {
  HALF_GAMEOVER_WIDTH,
  DINO_POSITION_X,
  DINO_POSITION_Y,
  DINO_START_POSITION_X,
  DINO_START_POSITION_Y,
  HALF_ICON_WIDTH,
  ICON_HEIGHT,
  GAMEOVER_HEIGHT,
  REAL_FLOOR_POSITION_Y,
  START_FLOOR_POSITION_X,
  DINO_SCALE_AREA,
  DINO_INITIAL_WEIGHT,
  INITIAL_GRAVITY,
} from "./utils/constants";

// Global variable for global pause
window.pauseGame = false;

if (IS_HIDPI == true) {
  loadSpriteAtlas("sprites/dino_big.png", "sprites/dino_big.json");
} else {
  loadSpriteAtlas("sprites/dino_small.png", "sprites/dino_small.json");
}

// Display a table with latest result
getLast5Scores();
getLastAll5Scores();

// Show chart
showchart();

// Load sounds
loadSound("jump", "sounds/jump.ogx");
loadSound("hit", "sounds/hit.ogx");
loadSound("reached", "sounds/reached.ogx");

gravity(INITIAL_GRAVITY);
focus();

layers(["ui", "game"], "game");

// Begin of the game character
add([
  pos(DINO_START_POSITION_X, DINO_START_POSITION_Y),
  sprite("start"),
  origin("center"),
  "start_position",
]);
add([
  pos(START_FLOOR_POSITION_X, REAL_FLOOR_POSITION_Y),
  sprite("start_floor"),
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
  origin("center"),
  body({ weight: DINO_INITIAL_WEIGHT }),
  sprite("dino"),
  "dino",
]);

// Load handlers
handlers(dino);
deck();
