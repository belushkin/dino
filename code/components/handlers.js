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
  dino.play("stay");
  idle();

  // Get start sprite
  const start_pos = get("start_position");

  // Space key pressed
  onKeyPressRepeat("space", () => {
    if (!ground) {
      ground = true;
    }
    dino.play("stay");

    // unpause game
    if (pauseGame == true) {
      // start the dino
      dino.paused = false;
      // unpause components
      pauseGame = false;
      // destroy cactuses
      every("cactus", destroy);

      // hide game over
      const gameover = get("gameover")[0];
      const gameovericon = get("gameovericon")[0];
      gameover.hidden = true;
      gameovericon.hidden = true;

      // start the spawning of the cactuses
      cactus();
    }

    if (start_pos.length > 0) {
      destroyAll("start_position");
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

function idle() {
  const dino = get("dino")[0];
  dino.play("idle");
  wait(0.1, () => {
    dino.play("stay");
  });
  // wait a random amount of time to spawn next cloud
  wait(rand(3, 7), idle);
}
