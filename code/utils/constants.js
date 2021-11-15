export const BIG_OR_SMALL = 0;

let c;
if (BIG_OR_SMALL === 0) {
  c = require("./constants/small");
} else {
  c = require("./constants/big");
}

// Game over text and icon constants
export const HALF_GAMEOVER_WIDTH = 190;
export const HALF_ICON_WIDTH = 37;
export const ICON_HEIGHT = 130;
export const GAMEOVER_HEIGHT = 80;

// Dino constants
export const DINO_POSITION_X = 0;
export const DINO_START_POSITION_X = DINO_POSITION_X + c.DINO_START_POSITION_X;
export const DINO_POSITION_Y = c.DINO_POSITION_Y;
export const DINO_JUMP_FORCE = 800;

// Cactuses constants
export const CACTUS_SPEED = 180;
export const SMALL_CACTUS_POSITION = 200;
export const BIG_CACTUS_POSITION = 175;

// Clouds constants
export const CLOUD_SPEED = 180;
export const CLOUD_HEIGHT_1 = 110;
export const CLOUD_HEIGHT_2 = 70;

// Times constants
export const TIME_INTERVALS = [0, 1, 2, 3, 4];
export const TIME_POSITION_OFFSET = 25;
export const TIME_Y_POSITION = 20;
export const TIME_X_POSITION = width() - 300;
export const TIME_APPEAR_INTERVAL = 120;
export const TIME_COUNT_INTERVAL = 0.1;
export const SPACE_BETWEEN_SCORE_AND_TIME = 150;

// Floor constants
export const FLOOR_POSITION_Y = c.FLOOR_POSITION_Y;
export const REAL_FLOOR_POSITION_Y = c.REAL_FLOOR_POSITION_Y;
export const FLOOR_MOVEMENT_STEP = 150;
export const FLOOR_FRAMES = [0, 1, 2, 3, 4, 5, 6];
export const FLOOR_HEIGHT = 1;
export const FLOOR_INTERVAL = 120;
export const FLOOR_NUMBER_FRAMES = 120;

// Enemy constants
export const ENEMY_SPEED = 180;
export const ENEMY_HEIGHT_1 = 130;
export const ENEMY_HEIGHT_2 = 90;
