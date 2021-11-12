import {
  FLOOR_POSITION_Y,
  FLOOR_MOVEMENT_STEP,
  FLOOR_FRAMES,
  FLOOR_HEIGHT,
  FLOOR_INTERVAL,
} from "./../utils/constants";

export default function floor() {
  const floor = [];

  // Explain this
  let step = 0;
  FLOOR_FRAMES.forEach(function (el, index) {
    setTimeout(function () {
      floor.push(
        add([pos(step, FLOOR_POSITION_Y), layer("ui"), sprite("floor")])
      );
      step += FLOOR_MOVEMENT_STEP;
    }, index * FLOOR_INTERVAL);
  });

  // And this
  setTimeout(function () {
    let i = 0;
    loop(0.2, () => {
      for (let j = 0; j < floor.length; j++) {
        floor[j].frame = (j + i) % 15;
      }
      i++;
    });
  }, 600); // 120 * 5
}

// And this
export function realFloor() {
  add([
    rect(width(), FLOOR_HEIGHT),
    pos(0, height()),
    origin("botleft"),
    area(),
    solid(),
    // color(127, 200, 255),
  ]);
}
