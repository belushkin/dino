import { DINO_JUMP_FORCE } from "./../utils/constants";

import run from "./floor";

let ground = false;

export default function key_handlers(dino, start) {
  // Space key pressed
  onKeyPressRepeat("space", () => {
    if (!ground) {
      run();
      ground = true;
    }

    dino.play("idle");

    if (start.exists()) {
      destroy(start);
    }

    if (dino.grounded()) {
      dino.jump(DINO_JUMP_FORCE);
    }
  });

  // Ground
  dino.on("ground", () => {
    if (ground) {
      dino.play("run");
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
