var map = {
    generate: function() {
        this.populateMap();
    },

    populateMap: function() {
        tiles = [];
        for (let i = 0; i < game.viewWidth; i++) {
            tiles[i] = [];
            for (let j = 0; j < game.viewHeight; j++) {
                if (Math.random() < 0.3) {
                    tiles[i][j] = new Wall(i, j);
                } else {
                    tiles[i][j] = new Floor(i, j);
                }
            }
        }
    },

    isInBounds: (x, y) => (
        x > 0 
        && y > 0 
        && x < game.viewWidth - 1 
        && y < game.viewHeight - 1
        ),

    getTile: function(x, y) {
        if (this.isInBounds(x, y)) {
            return tiles[x][y];
        } else {
            return new Wall(x, y);
        }
    }
};