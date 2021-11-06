import k from "./../kaboom";
import floor from "./floor";

const JUMP_FORCE = 800;

export default function jump(floor_initialized, dino, start) {
  keyPress("space", () => {
    // Initialize floor on first space pressed
    if (!floor_initialized) {
      floor();
      floor_initialized = true;
    }

    dino.play("idle");

    if (start.exists()) {
      destroy(start);
    }

    if (dino.grounded()) {
      dino.jump(JUMP_FORCE);
    }
  });

  dino.on("ground", () => {
    if (floor_initialized) {
      dino.play("run");
    }
  });
}
