import k from "./kaboom";

import { realFloor } from "./src/floor";
import key_handlers from "./src/key_handlers";
import cloud from "./src/cloud";
import cactus from "./src/cactus";
import hi from "./src/hi";

const DINO_POSITION_X = 5;
const DINO_POSITION_Y = 129;

loadSpriteAtlas("sprites/dino.png", "sprites/dino.json");

gravity(2400);

layers(["ui", "game"], "game");

// Begin of the game character
const start = add([
  pos(DINO_POSITION_X + 2, DINO_POSITION_Y),
  sprite("start"),
  layer("ui"),
]);

// Draw dino at the same time over start dino
const dino = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  area(),
  body(),
  sprite("dino"),
]);
dino.play("idle");

// Load handlers
key_handlers(dino, start);
cloud();
cactus();
realFloor();
hi();
