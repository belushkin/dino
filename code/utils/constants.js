export const BIG_OR_SMALL = 0;

let c;
if (BIG_OR_SMALL === 0) {
  c = require("./constants/small");
} else {
  c = require("./constants/big");
}

// Game over text and icon constants
export const HALF_GAMEOVER_WIDTH = c.HALF_GAMEOVER_WIDTH;
export const HALF_ICON_WIDTH = c.HALF_ICON_WIDTH;
export const ICON_HEIGHT = c.ICON_HEIGHT;
export const GAMEOVER_HEIGHT = c.GAMEOVER_HEIGHT;

// Dino constants
export const DINO_POSITION_X = 0;
export const DINO_START_POSITION_X = DINO_POSITION_X + c.DINO_START_POSITION_X;
export const DINO_POSITION_Y = c.DINO_POSITION_Y;
export const DINO_JUMP_FORCE = 800;

// Cactuses constants
export const CACTUS_SPEED = c.CACTUS_SPEED;
export const SMALL_CACTUS_POSITION = c.SMALL_CACTUS_POSITION;
export const BIG_CACTUS_POSITION = c.BIG_CACTUS_POSITION;

// Clouds constants
export const CLOUD_SPEED = 180;
export const CLOUD_HEIGHT_1 = 110;
export const CLOUD_HEIGHT_2 = 70;

// Times constants
export const TIME_INTERVALS = c.TIME_INTERVALS;
export const TIME_POSITION_OFFSET = c.TIME_POSITION_OFFSET;
export const TIME_Y_POSITION = c.TIME_Y_POSITION;
export const TIME_X_POSITION = c.TIME_X_POSITION;
export const TIME_APPEAR_INTERVAL = c.TIME_APPEAR_INTERVAL;
export const TIME_COUNT_INTERVAL = c.TIME_COUNT_INTERVAL;
export const SPACE_BETWEEN_SCORE_AND_TIME = c.SPACE_BETWEEN_SCORE_AND_TIME;

// Floor constants
export const FLOOR_POSITION_Y = c.FLOOR_POSITION_Y;
export const REAL_FLOOR_POSITION_Y = c.REAL_FLOOR_POSITION_Y;
export const FLOOR_MOVEMENT_STEP = c.FLOOR_MOVEMENT_STEP;
export const FLOOR_WIDTH = c.FLOOR_WIDTH;
export const FLOOR_HEIGHT = c.FLOOR_HEIGHT;
export const FLOOR_SPEED = c.FLOOR_SPEED;
export const FLOOR_NUMBER_FRAMES = c.FLOOR_NUMBER_FRAMES;

// Enemy constants
export const ENEMY_SPEED = 180;
export const ENEMY_HEIGHT_1 = 130;
export const ENEMY_HEIGHT_2 = 90;
