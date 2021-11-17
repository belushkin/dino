import {
  DINO_JUMP_FORCE,
} from "./../utils/constants";

import run from "./floor";

let floor_initialized = false;

export default function key_handlers(dino, start) {
  run();
  // Space key pressed
  onKeyPressRepeat("space", () => {
    if (!floor_initialized) {
      // run();
      floor_initialized = true;
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
    if (floor_initialized) {
      dino.play("run");
    }
  });
  
  // Down pressed
  onKeyPress("down", () => {
    if (floor_initialized) {
      dino.use(sprite('down'));
      dino.play("run");
    }
  });

  // Down released
  onKeyRelease("down", () => {
    if (floor_initialized) {
      dino.use(sprite('dino'));
    }
  });
}
