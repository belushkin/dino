import k from "./../kaboom";

const SPEED = 180;

export default function enemy() {
  const en = add([
    pos(width(), 120),
    move(LEFT, SPEED),
    layer("ui"),
    sprite("enemy"),
  ]);
  en.play("fly");

  // wait a random amount of time to spawn next enemy
  wait(rand(0.5, 3.5), enemy);
}
