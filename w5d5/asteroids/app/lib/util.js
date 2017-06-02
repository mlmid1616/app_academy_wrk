// Function.prototype.inherits = function (childClass, parentClass) {
//   childClass.prototype = new Object(parentClass.prototype);
//   this.prototype.constructor = this;
// }

const Util = {
  inherits (childClass, parentClass) {
      childClass.prototype = new Object(parentClass.prototype);
      childClass.prototype.constructor = childClass;
  },
  scale (vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  randomVec (length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  }

};

module.exports (Util);
