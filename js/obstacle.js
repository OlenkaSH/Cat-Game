class Obstacle {
  constructor(image) {
    this.image = image;
    this.x = width;
    this.y = (Math.random() * height) / 1.2;
    this.width = 50;
    this.height = 50;
    this.score = 0;
  }

  collision(playerInfo) {
    // console.log('collision', playerInfo)
    // get the middle of the player
    const playerX = playerInfo.x + playerInfo.width / 2.5;
    const playerY = playerInfo.y + playerInfo.height / 2.5;
    // get the middle of the obstacle
    const obstacleX = this.x + this.width / 2.5;
    const obstacleY = this.y + this.height / 2.5;
    this.score++;
    // measure the distance between obstacle and player
    if (dist(obstacleX, obstacleY, playerX, playerY) > 35) {
      // this is not a collision
      return false;
    } else {
      game.player.score += 1;
      console.log(game.player.score);
      return true;
    }
  }

  draw() {
    this.x--;
    image(this.image, this.x, this.y, this.width, this.height);

    game.player.score;
    text("Score: " + game.player.score, 10, 20);
    textSize(26);
    textStyle(BOLD);
  }
}
