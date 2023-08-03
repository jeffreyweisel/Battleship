const gridContainer = document.getElementById('grid-container');
const messageElement = document.getElementById('message')
const resetButton = document.getElementById('resetbtn')

const grid = [];
const gridSize = 10;
const numShips = 45;
let shipsSunk = 0;
//TODO: write a function to reset grid to 0 


//Initialize the grid with empty cells and randomly place ships
function initaializeGrid() {
    for (let row = 0; row <gridSize; row++){
        grid[row]=[];
        for (let col = 0; col< gridSize; col++) {
          grid[row][col]= {isShip: false, isHit: false } ;
        
    }
}

for (let i = 0; i <numShips; i++) {
    const randomRow = Math.floor(Math.random() * gridSize);
    const randomCol = Math.floor (Math.random() * gridSize);
    if (!grid[randomRow][randomCol].isShip) {
        grid[randomRow][randomCol].isShip = true ;
    } else {
        i--; //Retry placing the ship
    }
    }
}

//Rendering the grid on the HTML page
function renderGrid() {
    gridContainer.innerHTML = '' ;
    for (let row = 0; row < gridSize; row++){
        for (let col = 0; col < gridSize; col++) {
            const cell = document.createElement ('div');
        cell.className = 'cell';
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener('click' , cellClickHandler);
        gridContainer.appendChild(cell);

        }
    }
}

function run(){
  alert("Suck on these nutz")
}
// How it will handle a click on a cell
function cellClickHandler(event) {
    const row = parseInt(event.target.dataset.row);
    const col = parseInt(event.target.dataset.col);

    if (grid[row][col].isHit) {
        messageElement.textContent = 'You already fired at this location.';
        return;
    }
    if (grid[row][col].isShip) {
        grid[row][col].isHit = true;
        event.target.style.backgroundColor = 'red';
        shipsSunk++;
        
        if (shipsSunk === numShips) {
            messageElement.textContent = 'Congratulations! You sunk all the ships!';
        } else {
            messageElement.textContent = 'Hit! Keep going!';
        } 
    }else{
      grid[row][col].isHit= true;
      event.target.style.backgroundColor = 'grey';
      messageElement.textContent = 'Miss! Try again';
      
    }
}
function resetGrid(){
  renderGrid()
}
resetButton.addEventListener('click' , ()=>{
  resetGrid()
  console.log("working")
}) 

    // Starting the game
    function startGame() {
        initaializeGrid();
        renderGrid();
        messageElement.textContent = 'Click on a cell to fire!';
        console.log(messageElement)
    }
    startGame();

  