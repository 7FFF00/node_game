class Tile extends Renderable {
  constructor(x, y, sprite, passable) {
    super(x, y, sprite, 'tiles');
    this.passable = passable;
  }
}

class Floor extends Tile {
  constructor(x, y) {
    super(x, y, 0, true);
  }
}

class Wall extends Tile {
  constructor(x, y) {
    super(x, y, 1, false);
  }
}