const View = require("./hanoi-view.js");
const Game = require("./hanoi.js");


$( () => {
  const rootEl = document.getElementsByClassName('hanoi')[0];
  const game = new Game();
  new View(game, rootEl);
  console.log("Hello");
});
