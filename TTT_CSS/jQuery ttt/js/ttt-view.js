class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('.square').on("click", (e) => {
      const $currentSq = $(e.currentTarget);
      const posString = $currentSq.attr("data-pos");
      const posStringArray = posString.split(",");
      let pos = [];
      // debugger;
      posStringArray.forEach( (el) => pos.push(parseInt(el)) );
      // debugger;
      if (!this.game.board.isEmptyPos(pos))
        alert("Invalid move!");
      this.makeMove($currentSq);
      this.game.playMove(pos);

      if (this.game.isOver()) {

        const $squares = $('.square');
        $squares.addClass('loser');
        const $message = $("<h2>");



        if (this.game.winner()) {
          const $div = $("<div>");
          $div.addClass("dance");
          this.$el.append($div);
          $message.text(`You win, ${this.game.currentPlayer}`);
          $squares.each ((index, el) => {
            const $el1 = $(el);
            if ($el1.text() === this.game.winner()){
              $el1.removeClass('loser').addClass('winner');
            }
          });
        } else {
          $message.text('It is a draw');
        }
        this.$el.append($message);
        $('.square').off("click");
      }

    });
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    $square.addClass("filled");
  }

  setupBoard() {
    for(let i = 0; i < 3; i ++) {
      this.addRow();
    }
  }

  addRow() {
    const rowIdx = this.$el.find(".row").length;
    const $row = $("<ul>").addClass("row").addClass("group");
    for(let colIdx = 0; colIdx < 3; colIdx++) {
      const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
      $square.on("mouseenter", (e) => {
        const $square = $(e.currentTarget);
        $square.addClass("mouseOn");
      });
      $square.on("mouseleave", (e) => {
        const $square = $(e.currentTarget);
        $square.removeClass("mouseOn");
      });
      $row.append($square);
    }
    this.$el.append($row);
  }
}

module.exports = View;
