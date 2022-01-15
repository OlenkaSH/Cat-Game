class Game {
  setup() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.score = 0;
  }

  constructor() {
    this.backgroundImages;
    this.mouseImage;
  }

  preload() {
    this.backgroundImage = loadImage("assets/background.jpeg");

    this.playerImage = loadImage("assets/snake1.png");
    this.mouseImage = loadImage("assets/obstacle.png");
  }

  draw() {
    clear();

    this.background.draw();
    this.player.draw();

    //add obstacles
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle(this.mouseImage));
      //console.log(this.obstacles)
    }

    this.obstacles.forEach(function (obstacle) {
      obstacle.draw();
    });

    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
        return false;
      } else {
        return true;
      }
    });
  }
}
