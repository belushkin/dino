import {
  CLOUD_SPEED,
  CLOUD_HEIGHT_1,
  CLOUD_HEIGHT_2,
} from "./../utils/constants";

export default function cloud() {
  add([
    pos(width(), Math.random() < 0.5 ? CLOUD_HEIGHT_1 : CLOUD_HEIGHT_2),
    move(LEFT, CLOUD_SPEED),
    layer("ui"),
    sprite("cloud"),
  ]);

  // wait a random amount of time to spawn next cloud
  wait(rand(0.5, 3.5), cloud);
}
