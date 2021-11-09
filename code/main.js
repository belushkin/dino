import k from "./kaboom";

import { realFloor } from "./src/floor";
import jump from "./src/jump";
import down from "./src/down";
import cloud from "./src/cloud";
import cactus from "./src/cactus";

const DINO_POSITION_X = 0;
const DINO_POSITION_Y = 129;

let floor_initialized = false;

loadSpriteAtlas("sprites/dino.png", "sprites/dino.json");

gravity(2400);

layers([
    "ui",
    "game",
], "game")

// Begin of the game character
const start = add([pos(DINO_POSITION_X, DINO_POSITION_Y), sprite("start")]);

// Draw dino at the same time over start dino
const dino = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  area(),
  body(),
  sprite("dino"),
]);

// Load handlers
jump(floor_initialized, dino, start);
down(dino);
cloud();
cactus();
realFloor();
