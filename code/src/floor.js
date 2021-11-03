import k from "./../kaboom";

export default function floor() {
  const floor = [];
  let step = 0;

  for (let t = 0; t < 5; t++) {
    floor.push(add([
        pos(step, 82),
        sprite("floor"),
    ]));
    step += 150;
  }

  let i = 0;
  loop(0.2, () => {
    for (let j = 0; j < floor.length; j++) {
      floor[j].frame = (j+i) % 15;
    }
    i++;
    // Explain this
    // if (i == 16) {
    //   i = 0;
    // }
  });
}
