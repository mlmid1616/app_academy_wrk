class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.startIdx = null;
    this.setupTowers();
    this.render();
    // TODO:  set up listeners TODO
    while (!this.game.isWon()) {
      this.startIdx = this.clickTower();
      this.game.move(this.startIdx, this.clickTower());
      // TODO:  alert the user if move is Invalid
      this.render();
    }
    // TODO tell the user you won
  }

  setupTowers() {
    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul>");
      const $el = $(this.el);
      $el.append($ul);
      }
    }

    for (let i = 3; i > 0; i--) {
      const $li = $("<li>");
      $li.text("i");
      $("ul").eq(0).append($li);
    }
  }

  render() {
    // render

  }


}

module.exports = View;
