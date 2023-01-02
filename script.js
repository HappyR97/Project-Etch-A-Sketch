const grid = document.querySelector(".grid-container");
const btnColor = document.querySelector(".btn--color");
const btnRandom = document.querySelector(".btn--random");
const btnClear = document.querySelector(".btn--clear");
const btnSize = document.querySelector(".btn--size");

let cellSize = 16;
let color = "red";
let cell = [];

// Function that adds cells in the grid
function createCells(cellSize) {
  grid.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;
  for (let i = 0; i < cellSize ** 2; i++) {
    cell[i] = document.createElement("div");
    cell[i].classList.add("cell");
    grid.appendChild(cell[i]);

    cell[i].addEventListener("mouseover", function () {
      cell[i].style.backgroundColor = `${color}`;
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

createCells(cellSize);

btnClear.addEventListener("click", function () {
  clearCells(cellSize);
});

btnSize.addEventListener("click", function () {
  let size = Number(prompt("Choose cell size (from 1 to 100)"));
  console.log(size);
  if (size < 1 || size > 100 || size !== size) {
    alert("You did not choose a valid option");
  } else {
    clearCells(cellSize);
    removeCells(cellSize);
    cellSize = size;
    createCells(cellSize);
  }
});

console.log(cellSize);

//  grid-template-columns: repeat(cellSize, 1fr);
//  grid-template-rows: repeat(cellSize, 1fr);
