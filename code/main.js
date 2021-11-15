import k from "./kaboom";

import { realFloor } from "./components/floor";
import key_handlers from "./components/key_handlers";
import cloud from "./components/cloud";
import cactus from "./components/cactus";
import enemy from "./components/enemy";
import hi from "./components/hi";
import {
  HALF_GAMEOVER_WIDTH,
  DINO_POSITION_X,
  DINO_POSITION_Y,
  HALF_ICON_WIDTH,
  ICON_HEIGHT,
  GAMEOVER_HEIGHT,
} from "./utils/constants";

loadSpriteAtlas("sprites/dino_small.png", "sprites/dino_small.json");

gravity(2400);

layers(["ui", "game"], "game");

// Begin of the game character
// const start = add([
//   pos(DINO_POSITION_X + 2, DINO_POSITION_Y),
//   sprite("start"),
//   layer("ui"),
// ]);

// const gameover = add([
//   pos(width() / 2 - HALF_GAMEOVER_WIDTH, GAMEOVER_HEIGHT),
//   sprite("gameover"),
//   layer("ui"),
// ]);
// const icon = add([
//   pos(width() / 2 - HALF_ICON_WIDTH, ICON_HEIGHT),
//   sprite("icon"),
//   layer("ui"),
// ]);

// Draw dino at the same time over start dino
const dino = add([
  pos(30, 30),
  area(),
  body(),
  sprite("dino"),
]);
dino.play("idle");

// // Load handlers
// key_handlers(dino, start);
// cloud();
// cactus();
// enemy();
realFloor();
// hi();
