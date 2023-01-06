const grid = document.querySelector(".grid-container");
const gridSizeText = document.querySelector(".grid-size");
const btnColor = document.querySelector(".btn--color");
const btnRandom = document.querySelector(".btn--random");
const btnClear = document.querySelector(".btn--clear");
const btnSize = document.querySelector(".btn--size");
const colorPicker = document.querySelector(".color-picker");

let cellSize = 32;
let color = colorPicker.value;
let cell = [];
let rainbowMode = false;

// Function that adds cells in the grid
function createCells(cellSize) {
  grid.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
  for (let i = 0; i < cellSize ** 2; i++) {
    cell[i] = document.createElement("div");
    cell[i].classList.add("cell");
    grid.appendChild(cell[i]);

    cell[i].addEventListener("mouseover", function () {
      if (rainbowMode === true) {
        color = randomColor(0, 255);
        cell[i].style.backgroundColor = `${color}`;
      } else if (rainbowMode === false) {
        cell[i].style.backgroundColor = `${color}`;
      }
    });
  }
}

// Function that clears all cell colors
function clearCells(cellSize) {
  for (let i = 0; i < cellSize ** 2; i++) {
    cell[i].style.backgroundColor = `white`;
  }
}

// Function that removes cells from grid
function removeCells(cellSize) {
  for (let i = 0; i < cellSize ** 2; i++) {
    grid.removeChild(cell[i]);
  }
}

// Function that gets a random RBG color
function randomColor(x, y) {
  function randomNumber(x, y) {
    return x + Math.floor(Math.random() * (y - x + 1));
  }
  let randomNumber1 = randomNumber(0, 255);
  let randomNumber2 = randomNumber(0, 255);
  let randomNumber3 = randomNumber(0, 255);

  return `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
}

createCells(cellSize);
gridSizeText.textContent = `${cellSize} x ${cellSize}`;

btnClear.addEventListener("click", function () {
  clearCells(cellSize);
});

btnSize.addEventListener("click", function () {
  let size = Number(prompt("Choose grid size (1 - 100)"));
  console.log(size);
  if (size < 1 || size > 100 || size !== size) {
    alert("You did not choose a valid option");
  } else {
    clearCells(cellSize);
    removeCells(cellSize);
    cellSize = size;
    gridSizeText.textContent = `${cellSize} x ${cellSize}`;
    createCells(cellSize);
  }
});

btnRandom.addEventListener("click", function () {
  if (rainbowMode === false) {
    rainbowMode = true;
    color = colorPicker.value;
    btnRandom.textContent = `Rainbow Mode:ON`;
  } else if (rainbowMode === true) {
    rainbowMode = false;
    color = colorPicker.value;
    btnRandom.textContent = `Rainbow Mode:OFF`;
  }
});

colorPicker.addEventListener("input", function () {
  color = colorPicker.value;
});
