const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

function Asteroid (options) {
  debugger;
  MovingObject.call(this, {"color":"red", "radius":15,
   "vel":this.randomVec(10), "pos": options.pos });
  // this.color = "red";
  // this.radius = 15;
}
Util.inherits(Asteroid, MovingObject);


// Scale the length of a vector by the given amount.


module.exports = Asteroid;
