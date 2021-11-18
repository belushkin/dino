import k from "./kaboom";

import { deck } from "./components/floor";
import key_handlers from "./components/key_handlers";
import cloud from "./components/cloud";
import cactus from "./components/cactus";
import enemy from "./components/enemy";
import hi from "./components/hi";
import {
  HALF_GAMEOVER_WIDTH,
  DINO_POSITION_X,
  DINO_POSITION_Y,
  DINO_START_POSITION_X,
  HALF_ICON_WIDTH,
  ICON_HEIGHT,
  GAMEOVER_HEIGHT,
} from "./utils/constants";

if (IS_HIDPI == true) {
  loadSpriteAtlas("sprites/dino_big.png", "sprites/dino_big.json");
} else {
  loadSpriteAtlas("sprites/dino_small.png", "sprites/dino_small.json");
}

gravity(2400);

layers(["ui", "game"], "game");

// const gameover = add([
//   pos(width() / 2 - HALF_GAMEOVER_WIDTH, GAMEOVER_HEIGHT),
//   sprite("gameover"),
//   layer("game"),
// ]);
// const icon = add([
//   pos(width() / 2 - HALF_ICON_WIDTH, ICON_HEIGHT),
//   sprite("icon"),
//   layer("game"),
// ]);

// Draw dino at the same time over start dino
const dino = add([
  pos(DINO_POSITION_X, DINO_POSITION_Y),
  area(),
  body(),
  sprite("dino"),
]);
dino.play("idle");

// // Load handlers
key_handlers(dino);
deck();

// cloud();
// cactus();
// enemy();
// hi();
