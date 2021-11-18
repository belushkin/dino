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
} from "./../utils/constants";

export const spawnStartFloor = () => {
  return add([
    pos(START_FLOOR_POSITION_X, REAL_FLOOR_POSITION_Y),
    "start",
    layer("ui"),
    origin("topright"),
    sprite("floor", { flipX: true }),
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

  // spawnStartFloor();

  onUpdate("start", (f) => {
    f.move(f.speed, 0);
    if (f.pos.x > FLOOR_WIDTH_SCREEN) {
      spawnFinishFloor(0);
      destroy(f);
    }
  });

  let spawned = false;
  onUpdate("finish", (f) => {
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
}

export function deck() {
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, FLOOR_POSITION_Y),
    area(),
    solid(),
    // color(255, 255, 255),
  ]);
}
