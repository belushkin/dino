import {
  CACTUS_SPEED,
  SMALL_CACTUS_POSITION,
  BIG_CACTUS_POSITION,
  ENEMY_SPEED,
  ENEMY_HEIGHT_1,
  ENEMY_HEIGHT_2,
  ENEMY_SCALE_AREA,
} from "../utils/constants";

const min_cactus_gap = 120;
const max_cactus_gap = 300;

const min_enemy_gap = 150;
const max_enemy_gap = 300;

export default function obstacles(next = null) {
  // Stop spawning obstacles if game is paused
  if (pauseGame) {
    return false;
  }

  if (next === null) {
    spawnFirstObstacle();
  } else {
    spawnNextObstacle(next);
  }
}

// custom comp
function handlespawn(next) {
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

// Generating next obstacle
function getNextObstacle() {
  let nextSize;
  let nextSpeed;
  let nextSprite;
  let nextPosition;
  let id;
  const nextObstacle = choose([0, 1]); // 0 - cactus, 1 - pterodactyl
  if (nextObstacle === 0) {
    const cactusSize = choose([0, 1]);
    id = "cactus";
    nextSize = cactusSize ? BIG_CACTUS_POSITION : SMALL_CACTUS_POSITION;
    nextSpeed = CACTUS_SPEED;
    nextSprite = cactusSize + "cactus" + choose([1, 2, 3]);
    nextPosition = rand(min_cactus_gap, max_cactus_gap);
  } else {
    id = "enemy";
    nextSize = choose([ENEMY_HEIGHT_1, ENEMY_HEIGHT_2]);
    nextSpeed = ENEMY_SPEED;
    nextSprite = "enemy";
    nextPosition = rand(min_enemy_gap, max_enemy_gap);
  }
  return {
    id: id,
    size: nextSize,
    speed: nextSpeed,
    sprite: nextSprite,
    position: nextPosition,
  };
}

function spawnFirstObstacle() {
  const cactusSize = choose([0, 1]);
  add([
    pos(width(), cactusSize ? BIG_CACTUS_POSITION : SMALL_CACTUS_POSITION),
    move(LEFT, CACTUS_SPEED),
    layer("ui"),
    area(),
    cleanup(),
    handlespawn(getNextObstacle()),
    sprite(cactusSize + "cactus" + choose([1, 2, 3])),
    "obstacle",
  ]);
}

function spawnNextObstacle(next) {
  const obstacle = add([
    pos(width(), next.size),
    move(LEFT, next.speed),
    layer("ui"),
    area(),
    cleanup(),
    handlespawn(getNextObstacle()),
    sprite(next.sprite),
    "obstacle",
  ]);
  if (next.id == "enemy") {
    obstacle.use(area({ scale: ENEMY_SCALE_AREA }));
    obstacle.use(origin("center"));
    obstacle.play("fly");
  }
}

on("spawn", "obstacle", (m, next) => {
  obstacles(next);
});
