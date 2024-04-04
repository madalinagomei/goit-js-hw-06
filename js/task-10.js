function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.getElementById("boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    boxes.append(divEl);
    divEl.style.height = size + "px";
    divEl.style.width = size + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    size += 10;
  }
  return;
}

createBtn.addEventListener("click", () => createBoxes(input.value));

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
