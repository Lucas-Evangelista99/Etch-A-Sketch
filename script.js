const painting = document.getElementById("content");
let size = 16;

function createGrid (rows, columns) {
    painting.style.setProperty("--rows", rows);
    painting.style.setProperty("--columns", columns);
    for (let i = 1; i <= (rows * columns); i++) {
        let square = document.createElement("div");
        painting.appendChild(square).className = "squares";
    }
}

function black(e) {
    e.target.style.backgroundColor = "black";
}

function paintBlack() {
    let squareArr = [...painting.children];
    for (let i = 0; i < squareArr.length; i++) {
        squareArr[i].addEventListener("mouseover", black);
    }
}

function random(e) {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${first},${second},${third})`;

}

function paintRandom() {
    let squareArr = [...painting.children];
    for (let i = 0; i < squareArr.length; i++) {
        squareArr[i].addEventListener("mouseover", random);
    }
}

createGrid(size, size);
paintBlack();

function clear() {
    painting.replaceChildren();
    createGrid(size, size);
    paintBlack();
};

function gridSize(newSize) {
    let answer = prompt("Enter a number between 1 and 100:");
    if (answer < 1 || answer > 100) {
        while (answer < 1 || answer > 100) {
            answer = prompt("ERROR: Invalid number. Enter a valid number(between 1 and 100).");
        }
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
        paintBlack();
    } else if (isNaN(answer) == true) {
        while (isNaN(answer) == true) {
            answer = prompt("ERROR: Invalid value. Enter a number between 1 and 100:");
        }
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
        paintBlack();
    } else {
        clear();
        newSize = parseInt(answer);
        size = newSize
        createGrid(size, size);
        paintBlack();
    }
}

let sizeButton = document.getElementById("size");
sizeButton.addEventListener("click", gridSize);
let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear);
let randomButton = document.getElementById("random");
randomButton.addEventListener("click", paintRandom);