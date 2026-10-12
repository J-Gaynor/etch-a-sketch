let canvasContainer = document.querySelector(".canvas-container");
let rows, squares;
let newGridButton = document.getElementById("new-grid");

// Change colour
function onHover(e) {
    const targetSquare = e.target;
    // targetSquare.classList.toggle("grey");
    targetSquare.className = "square";

    const colorNumber = Math.floor(Math.random() * 100);
    if (colorNumber <= 33) {
        targetSquare.classList.add("red");
    } else if (colorNumber >= 67) {
        targetSquare.classList.add("blue");
    } else {
        targetSquare.classList.add("green")
    }
}

// Populate grid
function gridCreator(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.classList.add("square")
            row.append(square);
        }
        canvasContainer.append(row);
    }
    rows = Array.from(canvasContainer.children);
    rows.forEach(square => square.addEventListener("mouseover", onHover));
}
gridCreator(16);

// New grid
function newGridPrompt() {
    let rowNumber;
    do {
        const input = prompt("How many rows should the new grid contain? (1-100)");
        if (input === null) {
            return;
        }
        rowNumber = parseInt(input);
    } while (isNaN(rowNumber) || rowNumber < 1 || rowNumber > 100)
}

newGridButton.addEventListener("click", newGridPrompt);