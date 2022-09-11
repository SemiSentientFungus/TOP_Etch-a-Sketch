const container = document.querySelector('.grid-container');

makeGrid(100);

function makeGrid(num){
  for (var i = 0; i < num; i++) {
    container.innerHTML += '<div class="grid-row"></div>';
    
      for (let i = 0; i < num; i++){
      const row = document.querySelector('grid-row');
      row.innerHTML += '<div class="grid-col"></div>';
    }
    
 }
}