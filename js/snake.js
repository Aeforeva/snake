const snake = {
  direction: "right",
  headX: 1,
  headY: 3,
  body: ["1-3", "1-2", "1-1"],
  exTail: "",

  moveHead: function () {
    if (this.direction === "up") {
      this.headX--;
    } else if (this.direction === "left") {
      this.headY--;
    } else if (this.direction === "down") {
      this.headX++;
    } else if (this.direction === "right") {
      this.headY++;
    }
    this.body.unshift(`${this.headX}-${this.headY}`);
  },

  dropTail: function () {
    this.exTail = this.body[this.body.length - 1];
    this.body.pop();
    dots.forEach((dot) => {
      if (dot.id === this.exTail) {
        dot.cont = false;
      }
    });
  },

  overDots: function () {
    dots.forEach((dot) => {
      snake.body.forEach((element) => {
        if (element === dot.id) {
          dot.cont = "snake";
        }
      });
      if (snake.body[0] === dot.id) {
        dot.cont = "head";
      }
    });
  },
};
