const game = document.querySelector("#game");
const score = document.querySelector("#score");
let scoreVal = 0;
// creat game field
createDots(12, 18);

// Base lvl wall
dots.forEach((dot) => {
  if (dot.x === 0 || dot.y === 0 || dot.x === 11 || dot.y === 17) {
    dot.cont = "wall";
  }
});

// add some wall (lvl editor lol)
dots[148].cont = "wall";
dots[149].cont = "wall";
dots[150].cont = "wall";
dots[151].cont = "wall";
dots[152].cont = "wall";

dots[63].cont = "wall";
dots[64].cont = "wall";
dots[65].cont = "wall";
dots[66].cont = "wall";
dots[67].cont = "wall";

randomResp("buff");
snake.overDots();
renderDots(12, 18);

function moveBody() {
  if (!dots[snake.headX * 18 + snake.headY].cont) {
    snake.dropTail();
  } else if (dots[snake.headX * 18 + snake.headY].cont === "buff") {
    scoreVal++;
    score.innerHTML = `Score ${scoreVal}`;
  } else if (
    dots[snake.headX * 18 + snake.headY].cont === "wall" ||
    dots[snake.headX * 18 + snake.headY].cont === "snake"
  ) {
    alert(`Game Over\nYour score ${scoreVal}\nPress F5 for new game`);
  }
}

function oneFrame() {
  snake.moveHead();
  moveBody();
  snake.overDots();
  renderDots(12, 18);
}
