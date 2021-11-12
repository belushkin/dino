import {
  CACTUS_SPEED,
  SMALL_CACTUS_POSITION,
  BIG_CACTUS_POSITION,
} from "./../utils/constants";

import randomInteger from "./../utils/random";

export default function cactus() {
  const cactusSize = randomInteger(0, 1);
  add([
    pos(width(), cactusSize ? BIG_CACTUS_POSITION : SMALL_CACTUS_POSITION),
    move(LEFT, CACTUS_SPEED),
    layer("ui"),
    sprite(cactusSize + "cactus" + randomInteger(1, 3)),
  ]);

  // wait a random amount of time to spawn next cactus
  wait(rand(0.5, 3.5), cactus);
}
