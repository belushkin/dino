import {
  DINO_JUMP_FORCE,
  INITIAL_MOVEMENT_DINO_SPEED,
  CACTUS_WAIT_TIME,
  CLOUD_WAIT_TIME,
} from "../utils/constants";

import hi from "./hi";
import cloud from "./cloud";
import obstacles from "./obstacles";
import run, { spawnStartFloor } from "./floor";

let ground = false;
let begin = true;
let collided = false;
let start_pos;

export default function handlers(dino) {
  spawnStartFloor();
  dino.play("stay");
  idle();

  // Get start sprite
  start_pos = get("start_position");

  let net = 0;
  onKeyDown("space", () => {
    net += 1;
  });
  onKeyPress("space", () => {
    if (collided) wait(0.2, unPause);
  });
  onKeyPress("up", () => {
    if (collided) wait(0.2, unPause);
  });

  onKeyPressRepeat("space", () => {
    if (!collided) jump();
  });
  onKeyPressRepeat("up", () => {
    if (!collided) jump();
  });

  // Gravity
  onKeyRelease("space", () => {
    net = 0;
  });
  onKeyRelease("up", () => {
    net = 0;
  });

  onCollide("dino", "obstacle", (d, c) => {
    if (pauseGame) {
      return;
    }
    collided = true;
  });

  // Click anywhere and unpause
  onClick(() => unPause());

  // Ground
  dino.on("ground", () => {
    if (ground) {
      dino.play("run");
    }
    if (ground && begin) {
      // Init handlers
      run();
      hi();
      wait(CLOUD_WAIT_TIME, () => {
        cloud();
      });
      wait(CACTUS_WAIT_TIME, () => {
        obstacles();
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
    if (ground && !collided) {
      dino.use(sprite("down"));
      dino.play("run");
    }
  });

  // Down released
  onKeyRelease("down", () => {
    if (ground && !collided) {
      dino.use(sprite("dino"));
      dino.play("run");
    }
  });
}

function idle() {
  if (ground) {
    return;
  }
  const dino = get("dino")[0];
  dino.play("idle");
  wait(0.1, () => {
    dino.play("stay");
  });
  // wait a random amount of time to spawn next cloud
  wait(rand(3, 7), idle);
}

function unPause() {
  if (pauseGame == true) {
    const dino = get("dino")[0];

    // start the dino
    dino.paused = false;
    dino.use(sprite("dino"));
    dino.play("run");
    // unpause components
    pauseGame = false;

    // destroy cactuses and clouds
    every("obstacle", destroy);
    every("cloud", destroy);

    // mark that handlers might be in use
    collided = false;

    // hide game over
    const gameover = get("gameover")[0];
    const gameovericon = get("gameovericon")[0];
    gameover.hidden = true;
    gameovericon.hidden = true;

    // start the spawning of the cactuses
    wait(3, obstacles);
    wait(3, cloud);
  }
}

function jump() {
  if (!ground) {
    ground = true;
  }
  const dino = get("dino")[0];
  dino.play("stay");

  if (start_pos.length > 0) {
    destroyAll("start_position");
  }

  if (dino.grounded()) {
    dino.jump(DINO_JUMP_FORCE);
    if (!begin) {
      play("jump");
    }
  }
}
