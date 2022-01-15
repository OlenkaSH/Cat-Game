const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(800, 600);
  game.setup();
}
function draw() {
  game.draw();
}
function keyPressed() {
  if (keyCode === 32) {
    // cat jumps
    game.player.jump();
  }
  if (keyCode === 39) {
    //cat moves to the right
    game.player.toRight();
  }
  if (keyCode === 37) {
    game.player.toLeft();
  }
}
