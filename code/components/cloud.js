import {
  CLOUD_SPEED,
  CLOUD_HEIGHT_1,
  CLOUD_HEIGHT_2,
} from "./../utils/constants";

import { handlecloud } from "../utils/comps";

const min_cloud_gap = 100;
const max_cloud_gap = 400;

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
    handlecloud(rand(min_cloud_gap, max_cloud_gap)),
    "cloud",
  ]);

  // wait a random amount of time to spawn next cloud
  // wait(rand(0.5, 3.5), cloud);
}

on("spawn", "cloud", (m, next) => {
  cloud();
});
