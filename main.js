let canvasContainer = document.querySelector(".canvas-container");

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