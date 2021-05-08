function buff4s() {
  randomResp("buff");
  setTimeout(randomRemove, 4000);
}

function buff5s() {
  randomResp("buff");
  setTimeout(randomRemove, 5000);
}

function buff6s() {
  randomResp("buff");
  setTimeout(randomRemove, 6000);
}

// clearInterval dont work with this :(

function gameSlow() {
  setInterval(oneFrame, 300);
  setInterval(buff6s, 12000);
}

function gameNormal() {
  setInterval(oneFrame, 200);
  setInterval(buff5s, 10000);
}

function gameFast() {
  setInterval(oneFrame, 100);
  setInterval(buff4s, 8000);
}
