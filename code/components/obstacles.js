import {
  OBSTACLE_SPEED,
  SMALL_CACTUS_POSITION,
  BIG_CACTUS_POSITION,
  ACCELERATION,
  OBSTACLE_MAX_SPEED,
  ENEMY_HEIGHT_1,
  ENEMY_HEIGHT_2,
  ENEMY_SCALE_AREA,
} from "../utils/constants";

import { handlespawn } from "../utils/comps";

let possible_obstacles = [0]; // cactuses and pterodactyles
let possible_cactuses = [1]; // cactuses

const min_cactus_gap = 200;
const max_cactus_gap = 300;

const min_enemy_gap = 150;
const max_enemy_gap = 300;

let currentSpeed = OBSTACLE_SPEED;

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

// Generating next obstacle
function getNextObstacle() {
  let nextSize;
  let nextSpeed;
  let nextSprite;
  let nextPosition;
  let id;

  const nextObstacle = choose(possible_obstacles); // 0 - cactus, 1 - pterodactyl
  if (nextObstacle === 0) {
    const cactusSize = choose([0, 1]);
    id = "cactus";
    nextSize = cactusSize ? BIG_CACTUS_POSITION : SMALL_CACTUS_POSITION;
    nextSpeed = OBSTACLE_SPEED;
    nextSprite = cactusSize + "cactus" + choose(possible_cactuses);
    nextPosition = rand(min_cactus_gap, max_cactus_gap);
  } else {
    id = "enemy";
    nextSize = choose([ENEMY_HEIGHT_1, ENEMY_HEIGHT_2]);
    nextSpeed = OBSTACLE_SPEED;
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
    move(LEFT, OBSTACLE_SPEED),
    layer("ui"),
    area(),
    cleanup(),
    handlespawn(getNextObstacle()),
    sprite(cactusSize + "cactus" + choose(possible_cactuses)),
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

on("cactus_middle", "timer", () => {
  possible_cactuses.push(2);
});

on("cactus_big", "timer", () => {
  possible_cactuses.push(3);
});

on("enemy", "timer", () => {
  // Adding pterodactyles to the obstacles list
  possible_obstacles.push(1);
});

onCollide("dino", "obstacle", (d, c) => {
  possible_obstacles = [0];
  possible_cactuses = [1];
});

onUpdate("obstacle", (f) => {
  if (currentSpeed < OBSTACLE_MAX_SPEED) {
    currentSpeed += ACCELERATION;
  }
});
