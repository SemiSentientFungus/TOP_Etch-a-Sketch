const container = document.getElementById("container");
makeRows(16, 16);

const grid = document.querySelectorAll('.grid-item');

console.log(grid);
for (const box of grid) {
  box.addEventListener('mouseover', function onClick() {
    box.setAttribute('style', 'background: black');
  });
}




function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = 'grid-item';
    /*container.innerHTML += '<div class="grid-item" onmouseover="colour()"></div>'*/
  };
};

function colour() {
  console.log("grid");
}
