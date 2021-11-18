import {
  DINO_JUMP_FORCE,
  INITIAL_MOVEMENT_DINO_SPEED,
  CACTUS_WAIT_TIME,
} from "../utils/constants";

import hi from "./hi";
import cactus from "./cactus";
import run, { spawnStartFloor } from "./floor";

let ground = false;
let begin = true;

export default function handlers(dino) {
  spawnStartFloor();

  // Space key pressed
  onKeyPressRepeat("space", () => {
    if (!ground) {
      ground = true;
    }
    dino.play("idle");
    dino.paused = false;

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
      // Init handlers
      run();
      hi();
      wait(CACTUS_WAIT_TIME, () => {
        cactus();
      });

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
