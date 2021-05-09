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
dots[27].cont = "wall";
dots[45].cont = "wall";
dots[63].cont = "wall";

dots[152].cont = "wall";
dots[170].cont = "wall";
dots[188].cont = "wall";

dots[91].cont = "wall";
dots[92].cont = "wall";
dots[93].cont = "wall";
dots[94].cont = "wall";
dots[95].cont = "wall";

dots[120].cont = "wall";
dots[121].cont = "wall";
dots[122].cont = "wall";
dots[123].cont = "wall";
dots[124].cont = "wall";

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
