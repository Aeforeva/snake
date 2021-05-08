// Respawn in random empty dot

let id = "";

function randomResp(buff) {
  const dotsFalse = dots.filter((element) => !element.cont);
  if (dotsFalse.length <= 1) {
    alert(`You WON!\nYour score ${scoreVal}\nPress F5 for new game`);
  }
  const random = Math.floor(Math.random() * dotsFalse.length);
  dots.forEach((element) => {
    if (element.id === dotsFalse[random].id) {
      id = element.id;
      element.cont = buff;
    }
  });
}

function randomRemove() {
  dots.forEach((element) => {
    if (element.id === id && element.cont === "buff") {
      element.cont = false;
    }
  });
}
