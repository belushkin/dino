import k from "./kaboom";

import { realFloor } from "./src/floor";
import key_handlers from "./src/key_handlers";
import cloud from "./src/cloud";
import cactus from "./src/cactus";

const DINO_POSITION_X = 0;
const DINO_POSITION_Y = 129;

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

add([pos(30, 30), sprite("0")]);
add([pos(55, 30), sprite("1")]);
add([pos(80, 30), sprite("2")]);
add([pos(105, 30), sprite("3")]);
add([pos(130, 30), sprite("4")]);
add([pos(155, 30), sprite("5")]);
add([pos(180, 30), sprite("6")]);
add([pos(205, 30), sprite("7")]);
add([pos(230, 30), sprite("8")]);
add([pos(255, 30), sprite("9")]);

// Load handlers
key_handlers(dino, start);
cloud();
cactus();
realFloor();
