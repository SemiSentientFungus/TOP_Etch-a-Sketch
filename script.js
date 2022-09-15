const container = document.getElementById("container");
const button = document.getElementById('prompt');

makeRows(16, 16);

button.addEventListener('click', generate);








function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = 'grid-item';
  };
  const grid = document.querySelectorAll('.grid-item');
  for (const box of grid) {
    box.addEventListener('mouseover', function onClick() {
      box.setAttribute('style', 'background: black');
    });
  }
  
};

function generate() {
  let num = prompt('How many squares would you like a side?');
  removeAllChildNodes();
  if (num > 100){
    alert('Too many squares!');
    num = 100;
  }
  makeRows(num, num);
}

function removeAllChildNodes() {
  while (container.firstChild) {
      container.removeChild(container.firstChild);
  }
}
