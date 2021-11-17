import {
  FLOOR_POSITION_Y,
  REAL_FLOOR_POSITION_Y,
  FLOOR_MOVEMENT_STEP,
  FLOOR_WIDTH,
  FLOOR_HEIGHT,
  FLOOR_SPEED,
  FLOOR_NUMBER_FRAMES,
} from "./../utils/constants";

export default function run() {
  const spawnStartFloor = () => {
    return add([
      pos(0, REAL_FLOOR_POSITION_Y),
      "start",
      layer("ui"),
      origin("topright"),
      sprite("floor", { flipX: true }),
      { speed: 300 },
    ]);
  };

  const spawnFinishFloor = (x) => {
    return add([
      pos(x, REAL_FLOOR_POSITION_Y),
      "finish",
      layer("ui"),
      sprite("floor"),
      { speed: -300 },
    ]);
  };

  spawnStartFloor();

  onUpdate("start", (f) => {
    f.move(f.speed, 0);
    if (f.pos.x > 600) {
      spawnFinishFloor(0);
      destroy(f);
    }
  });

  let spawned = false;
  onUpdate("finish", (f) => {
    f.move(f.speed, 0);
    if (f.pos.x < -590 && !spawned) {
      spawnFinishFloor(width());
      spawned = true;
    }
    if (f.pos.x < -1150) {
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
