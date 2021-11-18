import {
  TIME_INTERVALS,
  TIME_POSITION_OFFSET,
  TIME_Y_POSITION,
  TIME_X_POSITION,
  TIME_APPEAR_INTERVAL,
  TIME_HI_INTERVAL,
  SPACE_BETWEEN_SCORE_AND_TIME,
} from "./../utils/constants";

let times = [];
let scores = [];
let score = 0;

export default function hi() {
  // Adding timer
  const timer = add([{ time: 0, times, scores }]);

  // Draw numbers with timeout
  let position = TIME_X_POSITION;
  const h = add([
    pos(position - TIME_HI_INTERVAL, TIME_Y_POSITION),
    sprite("hi"),
    "time",
  ]);
  h.hidden = true;

  setTimeout(function () {
    TIME_INTERVALS.forEach(function (el, index) {
      setTimeout(function () {
        // Adding scores
        let s = add([pos(position, TIME_Y_POSITION), sprite("0"), "time"]);
        s.hidden = true;
        scores.push(s);

        // Adding times
        times.push(
          add([
            pos(position + SPACE_BETWEEN_SCORE_AND_TIME, TIME_Y_POSITION),
            sprite("0"),
            "time",
          ])
        );
        position += TIME_POSITION_OFFSET;
      }, (index + 1) * TIME_APPEAR_INTERVAL);
    });
  }, 300);

  // Update timer
  timer.onUpdate(() => {
    timer.time += dt();
    let str = timer.time.toFixed(1).toString().split(".").join("");
    // Draw timer
    for (let i = 0; i < str.length; i++) {
      if (times[TIME_INTERVALS.length - str.length + i]) {
        times[TIME_INTERVALS.length - str.length + i].unuse("time");
        times[TIME_INTERVALS.length - str.length + i].use(sprite(str[i]));
      }
    }

    // console.log(str);
    // if (absnum == 100) {
    //   // Draw scores
    //   for (let j = 0; j < str.length; j++) {
    //     if (scores[TIME_INTERVALS.length - str.length + j]) {
    //       scores[TIME_INTERVALS.length - str.length + j].unuse('time');
    //       scores[TIME_INTERVALS.length - str.length + j].use(sprite(str[j]));
    //     }
    //   }
    // }
  });
}
