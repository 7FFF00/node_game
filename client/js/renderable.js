class Renderable {
  constructor(x, y, sprite, spriteSheet) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
    this.spriteSheet = spriteSheet;
  }

  draw() {
    ctx.drawImage(
      game.assets[this.spriteSheet], // source image
      this.sprite * 16,              // x coord of top left of subrect
      0,                        // y coord of top left of subrect
      16,                       // width of subrect
      16,                       // height of subrect
      this.x * game.cellSize,   // x coord, top left of where to draw
      this.y * game.cellSize,   // y coord, top left of where to draw
      game.cellSize,            // image draw width
      game.cellSize             // image draw height
    );
  }
}