function Game () {
  this.DIM_X = document.body.clientWidth;
  this.DIM_Y = document.body.clientHeight;
  this.NUM_ASTEROIDS = 10;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {

  // let this.asteroids = [];
   while (asteroids.length < this.NUM_ASTEROIDS) {
     this.asteroids.push(new Asteroid ({ pos: this.randomPosition }));
   }
};

Game.prototype.randomPosition = function() {
  return [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach((asteroid)=> {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach (
    asteroid => asteroid.move
  );
};
