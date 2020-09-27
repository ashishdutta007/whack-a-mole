import "./styles.css";

// document.addEventListener("DOMContentLoaded", () => {
console.log("hi");
// alert("hey");
(function createGameGrid() {
  let grid = [];
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.push(square);
  }
  const container = document.querySelector(".gameGrid");
  console.log(grid);
  container.append(...grid);
})();
// });
//
