
// let fido3 = new Dog("Fido", "long");

// Function.prototype.inherits = function (superClass) {
//   function Surrogate() {}
//   Surrogate.prototype = superClass.prototype;
//
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

function Animal(title) {
  this.title = title;
  alert("balhhh");
}

Animal.prototype.run = function () {
  console.log("run");
};

function Dog(title, tail) {
  Animal.call(this, title);
  this.tail = tail;
}
Dog.inherits(Animal);

let fido = new Dog("Fido", "long");
