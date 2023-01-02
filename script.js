let squareNum = 16;

const grid = document.querySelector(".grid-container");
grid.style.gridTemplateColumns = `repeat(${squareNum}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${squareNum}, 1fr)`;

let cell = [];

for (let i = 0; i < squareNum ** 2; i++) {
  cell[i] = document.createElement("div");
  cell[i].classList.add("cell");
  grid.appendChild(cell[i]);

  cell[i].addEventListener("mouseover", function () {
    cell[i].style.backgroundColor = "red";
  });
}

//  grid-template-columns: repeat(squareNum, 1fr);
//  grid-template-rows: repeat(squareNum, 1fr);
