import {
  ENEMY_SPEED,
  ENEMY_HEIGHT_1,
  ENEMY_HEIGHT_2,
} from "./../utils/constants";

export default function enemy() {
  // Stop spawning enemies if game is paused
  if (pauseGame) {
    return false;
  }

  const en = add([
    pos(width(), choose([ENEMY_HEIGHT_1, ENEMY_HEIGHT_2])),
    move(LEFT, ENEMY_SPEED),
    layer("ui"),
    area(),
    body(),
    sprite("enemy"),
    "enemy",
  ]);
  en.play("fly");

  // wait a random amount of time to spawn next enemy
  wait(rand(0.5, 3.5), enemy);
}
