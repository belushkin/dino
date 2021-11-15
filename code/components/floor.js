import {
  FLOOR_POSITION_Y,
  REAL_FLOOR_POSITION_Y,
  FLOOR_MOVEMENT_STEP,
  FLOOR_FRAMES,
  FLOOR_HEIGHT,
  FLOOR_INTERVAL,
  FLOOR_NUMBER_FRAMES,
} from "./../utils/constants";

export default function floor() {
  const floor = [];

  let step = 0;
  FLOOR_FRAMES.forEach(function (el, index) {
    setTimeout(function () {
      floor.push(
        add([
          pos(step, REAL_FLOOR_POSITION_Y),
          layer("ui"),
          sprite("floor"),
          "floor",
        ])
      );
      step += FLOOR_MOVEMENT_STEP;
    }, index * FLOOR_INTERVAL);
  });

  setTimeout(function () {
    let i = 0;
    loop(0.2, () => {
      for (let j = 0; j < floor.length; j++) {
        floor[j].unuse("floor");
        floor[j].frame = (j + i) % FLOOR_NUMBER_FRAMES;
      }
      i++;
    });
  }, 600); // 120 * 5
}

// And this
export function realFloor() {
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, FLOOR_POSITION_Y),
    origin("botleft"),
    area(),
    solid(),
    // color(255, 255, 255),
  ]);
}
