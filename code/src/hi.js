import k from "./../kaboom";

const TIME_INTERVALS = [0, 1, 2, 3, 4];
const TIME_POSITION_OFFSET = 25;
const TIME_Y_POSITION = 30;
const TIME_X_POSITION = 355;
const TIME_APPEAR_INTERVAL = 120;
const TIME_COUNT_INTERVAL = 0.1;
const SPACE_BETWEEN_SCORE_AND_TIME = 150;

let times = [];
let scores = [];
let score = 0;

export default function hi() {
  let position = TIME_X_POSITION;
  TIME_INTERVALS.forEach(function (el, index) {
    add([
      pos(position - 50, TIME_Y_POSITION),
      sprite("hi"),
      "time",
    ])
    setTimeout(function () {
      scores.push(add([pos(position, TIME_Y_POSITION), sprite("0"), "time"]));
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

  // counting
  let absnum = 0;
  loop(TIME_COUNT_INTERVAL, () => {
    let str = absnum.toString();
    // Draw timer
    for (let i = 0; i < str.length; i++) {
      times[TIME_INTERVALS.length - str.length + i] &&
        times[TIME_INTERVALS.length - str.length + i].use(sprite(str[i]));

      if (absnum == 100) {
        // Draw scores
        for (let j = 0; j < str.length; j++) {
          scores[TIME_INTERVALS.length - str.length + j] &&
            scores[TIME_INTERVALS.length - str.length + j].use(sprite(str[j]));
        }
      }
    }
    absnum++;
  });
}
