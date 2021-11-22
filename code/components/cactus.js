import {
  CACTUS_SPEED,
  SMALL_CACTUS_POSITION,
  BIG_CACTUS_POSITION,
} from "./../utils/constants";

export default function cactus() {
  // Stop spawning cactuses if game is paused
  if (pauseGame) {
    return false;
  }

  const cactusSize = choose([0, 1]);
  add([
    pos(width(), cactusSize ? BIG_CACTUS_POSITION : SMALL_CACTUS_POSITION),
    move(LEFT, CACTUS_SPEED),
    layer("ui"),
    area(),
    sprite(cactusSize + "cactus" + choose([1, 2, 3])),
    "cactus",
  ]);

  // wait a random amount of time to spawn next cactus
  wait(rand(0.5, 3.5), cactus);
}
