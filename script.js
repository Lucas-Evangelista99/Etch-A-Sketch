let size = 16;
const painting = document.getElementById("content");

function createGrid (rows, columns) {
    painting.style.setProperty("--rows", rows);
    painting.style.setProperty("--columns", columns);
    for (let i = 1; i <= (rows * columns); i++) {
        let square = document.createElement("div");
        painting.appendChild(square).className = "squares";
    }
}

createGrid(size, size);