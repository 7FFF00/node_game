game = {
  // main engine object, handling primary engine state/settings
  cellSize: 32,   // size of each individual game cell, populated by actors and map tiles
  viewWidth: 18,  // cell count view width, defining game window width
  viewHeight: 18, // cell count view height, defining game window height
  uiWidth: 7,     // width of the ui implementation
  assets: {},     // container for references to asset files, such as spritesheets

  init: function() {
    // initialize game engine, begin primary render loop

    var startX = Math.floor(Math.random() * this.viewWidth - 2) + 1;
    var startY = Math.floor(Math.random() * this.viewHeight - 2) + 1;
    actor = new Actor('Player', startX, startY, 1);

    this.setupCanvas();
    map.generate();

    // load assets
    this.assets.actors = new Image();
    this.assets.actors.src = "assets/sprite_sheet.png";

    this.assets.tiles = new Image();
    this.assets.tiles.src = "assets/tile_sheet.png";

    // begin controller listener  

    // temp controller code, wasd || hjkl || arrows
    var validUp = (e) => (e.key == 'w' || e.key == 'k' || e.keyCode == '38');
    var validDown = (e) => (e.key == 's' || e.key == 'j' || e.keyCode == '40');
    var validLeft = (e) => (e.key == 'a' || e.key == 'h' || e.keyCode == '37');
    var validRight = (e) => (e.key == 'd' || e.key == 'l' || e.keyCode == '39');

    document.querySelector("html").onkeypress = function(e){
      if (validUp(e)) { actor.y--; }
      else if (validDown(e)) { actor.y++; }
      else if (validLeft(e)) { actor.x--; }
      else if (validRight(e)) { actor.x++; }
    };

    // begin render loop
    setInterval(this.draw, 50);
  },

  setupCanvas: function() {
    // setting up access to and manipulation of canvas node
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");

    canvas.width = this.cellSize * (this.viewWidth + this.uiWidth);
    canvas.height = this.cellSize * this.viewHeight;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    
    ctx.imageSmoothingEnabled = false;  // don't blur 
  },

  draw: function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < game.viewWidth; i++) {
      for (let j = 0; j < game.viewHeight; j++) {
        map.getTile(i, j).draw();
      }
    }

    actor.draw();
  }
};