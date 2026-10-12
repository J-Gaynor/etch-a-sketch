let canvasContainer = document.querySelector(".canvas-container");
let rows, squares;

// Populate grid
function gridCreator() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row")
        for (let j = 0; j < 16; j++) {
            const square = document.createElement("div");
            square.classList.add("square")
            row.append(square);
        }
        canvasContainer.append(row);
    }
}
gridCreator();

// Change colour
function onHover(e) {
    const targetSquare = e.target;
    targetSquare.classList.toggle("grey");
}

rows = Array.from(canvasContainer.children);
rows.forEach(square => square.addEventListener("mouseover", onHover));

