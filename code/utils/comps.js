// Spawn obstacles
export function handlespawn(next) {
  let spawned = false;
  return {
    id: "handlespawn",
    require: ["pos"],
    update() {
      const spos = this.screenPos();
      if (spos.x < width() - next.position && !spawned) {
        this.trigger("spawn", next);
        spawned = true;
      }
    },
  };
}

// Spawn clouds
export function handlecloud(position) {
  let spawned = false;
  return {
    id: "handlecloud",
    require: ["pos"],
    update() {
      const spos = this.screenPos();
      if (spos.x < width() - position && !spawned) {
        this.trigger("spawn");
        spawned = true;
      }
    },
  };
}
