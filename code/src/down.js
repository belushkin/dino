import k from "./../kaboom";
import floor from "./floor";

const JUMP_FORCE = 800;

export default function down(dino) {

  onKeyPressRepeat("down", () => {
    dino.use(sprite('cloud'))
    debug.log("oh no!")
  });

  // dino.on("ground", () => {
  //   if (floor_initialized) {
  //     dino.play("run");
  //   }
  // });
}
