class Actor extends Renderable {
  constructor(name, x, y, sprite) {
    super(x, y, sprite, 'actors');
    this.name = name;
  }
}