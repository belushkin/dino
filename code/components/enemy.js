import {
  ENEMY_SPEED,
  ENEMY_HEIGHT_1,
  ENEMY_HEIGHT_2,
} from "./../utils/constants";

export default function enemy() {
  const en = add([
    pos(width(), Math.random() < 0.5 ? ENEMY_HEIGHT_1 : ENEMY_HEIGHT_2),
    move(LEFT, ENEMY_SPEED),
    layer("ui"),
    sprite("enemy"),
  ]);
  en.play("fly");

  // wait a random amount of time to spawn next enemy
  wait(rand(0.5, 3.5), enemy);
}
