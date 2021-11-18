import {
  DINO_JUMP_FORCE,
  INITIAL_MOVEMENT_DINO_SPEED,
} from "./../utils/constants";

import run, { spawnStartFloor } from "./floor";

let ground = false;
let begin = true;

export default function key_handlers(dino) {
  spawnStartFloor();

  // Space key pressed
  onKeyPressRepeat("space", () => {
    if (!ground) {
      ground = true;
    }
    dino.play("idle");
    if (dino.grounded()) {
      dino.jump(DINO_JUMP_FORCE);
    }
  });

  // Ground
  dino.on("ground", () => {
    if (ground) {
      dino.play("run");
    }
    if (ground && begin) {
      run();
      begin = false;

      dino.use(move(RIGHT, INITIAL_MOVEMENT_DINO_SPEED));
      wait(1, () => {
        dino.unuse("move");
      });
    }
  });

  // Down pressed
  onKeyPress("down", () => {
    if (ground) {
      dino.use(sprite("down"));
      dino.play("run");
    }
  });

  // Down released
  onKeyRelease("down", () => {
    if (ground) {
      dino.use(sprite("dino"));
    }
  });
}
