import {
  FLOOR_POSITION_Y,
  REAL_FLOOR_POSITION_Y,
  FLOOR_START_FLOOR_DISAPEAR_X,
  FLOOR_WIDTH,
  FLOOR_HEIGHT,
  FLOOR_SPEED,
  START_FLOOR_SPEED,
  START_FLOOR_POSITION_X,
  FLOOR_WIDTH_SCREEN,
  START_FLOOR_POSITION_X_RECTANGLE,
  FLOOR_WIDTH_HEIGHT,
} from "./../utils/constants";

export const spawnStartFloor = () => {
  return add([
    pos(START_FLOOR_POSITION_X_RECTANGLE, REAL_FLOOR_POSITION_Y),
    "start_rectangle",
    rect(FLOOR_WIDTH_SCREEN, FLOOR_WIDTH_HEIGHT),
    { speed: START_FLOOR_SPEED },
  ]);
};

export default function run() {
  const spawnFinishFloor = (x) => {
    return add([
      pos(x, REAL_FLOOR_POSITION_Y),
      "finish",
      layer("ui"),
      sprite("floor"),
      { speed: FLOOR_SPEED },
    ]);
  };

  onUpdate("start_rectangle", (f) => {
    f.move(f.speed, 0);
    if (f.pos.x > FLOOR_WIDTH_SCREEN) {
      spawnFinishFloor(0);
      destroy(f);
      destroyAll("start_floor");
    }
  });

  let spawned = false;
  onUpdate("finish", (f) => {
    // Do nothing if paused
    if (pauseGame) return;

    f.move(f.speed, 0);
    if (f.pos.x < FLOOR_START_FLOOR_DISAPEAR_X && !spawned) {
      spawnFinishFloor(width());
      spawned = true;
    }
    if (f.pos.x < FLOOR_WIDTH) {
      destroy(f);
      spawned = false;
    }
  });

  onCollide("dino", "obstacle", (d, c) => {
    if (pauseGame) {
      return;
    }
    collide(d);
  });
}

function collide(dino) {
  // Show gameover icon and text
  const gameover = get("gameover")[0];
  const gameovericon = get("gameovericon")[0];
  gameover.hidden = false;
  gameovericon.hidden = false;

  dino.play("hit");
  play("hit");

  // pause all existing cactuses and clouds and enemies
  every("obstacle", (c) => {
    c.paused = true;
  });
  every("cloud", (c) => {
    c.paused = true;
  });

  dino.paused = true;
  pauseGame = true;
}

export function deck() {
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, FLOOR_POSITION_Y),
    layer("ui"),
    area(),
    solid(),
    // color(0, 0, 0),
  ]);
}
