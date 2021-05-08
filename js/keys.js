// Snake control
document.addEventListener("keydown", function (params) {
  if (
    (params.key === "w" || params.key === "ц" || params.key === "ArrowUp") &&
    snake.direction !== "down"
  ) {
    snake.direction = "up";
  } else if (
    (params.key === "a" || params.key === "ф" || params.key === "ArrowLeft") &&
    snake.direction !== "right"
  ) {
    snake.direction = "left";
  } else if (
    (params.key === "s" || params.key === "ы" || params.key === "ArrowDown") &&
    snake.direction !== "up"
  ) {
    snake.direction = "down";
  } else if (
    (params.key === "d" || params.key === "в" || params.key === "ArrowRight") &&
    snake.direction !== "left"
  ) {
    snake.direction = "right";
  }
});
