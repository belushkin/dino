import {
  CLOUD_SPEED,
  CLOUD_HEIGHT_1,
  CLOUD_HEIGHT_2,
} from "./../utils/constants";

export default function cloud() {
  // Stop spawning clouds if game is paused
  if (pauseGame) {
    return false;
  }

  add([
    pos(width(), choose([CLOUD_HEIGHT_1, CLOUD_HEIGHT_2])),
    move(LEFT, CLOUD_SPEED),
    layer("ui"),
    sprite("cloud"),
    "cloud",
  ]);

  // wait a random amount of time to spawn next cloud
  wait(rand(0.5, 3.5), cloud);
}
