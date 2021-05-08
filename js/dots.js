class Dot {
  constructor(x, y) {
    (this.x = x), (this.y = y);
    this.id = `${x}-${y}`;
    this.cont = false;
  }
}
// Create game field
let dots = [];
function createDots(xMax, yMax) {
  dots = [];
  for (let x = 0; x < xMax; x++) {
    let dotY = [];
    for (let y = 0; y < yMax; y++) {
      dotY.push(new Dot(x, y));
    }
    dots.push(...dotY);
  }
}
// Render 1 frame
function renderDots(xMax, yMax) {
  let html = "";
  for (let x = 0; x < xMax; x++) {
    html += `<div>`;
    let line = "";
    for (let y = 0; y < yMax; y++) {
      line += `<span class="${dots[x * yMax + y].cont}" id="${
        x * yMax + y // id - tests and lvl edit
      }">&nbsp&nbsp&nbsp&nbsp</span>`;
    }
    html += `${line}</div>`;
  }
  this.game.innerHTML = html;
}
