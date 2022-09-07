const painting = document.getElementById("content");
let size = 16;

function createGrid (rows, columns) {
    painting.style.setProperty("--rows", rows);
    painting.style.setProperty("--columns", columns);
    for (let i = 1; i <= (rows * columns); i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", black);
        painting.appendChild(square).className = "squares";
    }
}

function black(e) {
    e.target.style.backgroundColor = "black";
}

createGrid(size, size);

function clear() {
    painting.replaceChildren();
    createGrid(size, size);
};

function gridSize(newSize) {
    let answer = prompt("Enter a number between 1 and 100:");
    if (answer < 1 || answer > 100) {
        while (answer < 1 || answer > 100) {
            answer = prompt("ERROR: Invalid value. Enter a valid number(between 1 and 100).");
        }
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
    } else if (isNaN(answer) == true) {
        while (isNaN(answer) == true) {
            answer = prompt("ERROR: Invalid value. Enter a valid number (between 1 and 100).");
        }
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
    } else {
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
    }
}

let sizeButton = document.getElementById("size");
sizeButton.addEventListener("click", gridSize);
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
