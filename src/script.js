const gridContainer = document.querySelector(".main-grid-cont");
let gridCount = 16;
renderGrid();
boxChangeColor();

function renderGrid() {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridCount; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("border", "flex-1", "flex");
        for (let j = 0; j < gridCount; j++) {
            const colDiv = document.createElement("div");
            colDiv.classList.add(
                "box",
                "border",
                "border-b-0",
                "flex-1",
                "flex",
                "cursor-crosshair"
            );
            rowDiv.appendChild(colDiv);
        }
        gridContainer.appendChild(rowDiv);
    }
}

document.querySelector(".grid-change-btn").addEventListener("click", () => {
    gridCount = prompt("Number of Grids: (3-100)");
    if (gridCount < 3 || gridCount > 100) {
        alert("Invalid Grid Size!!");
    } else {
        renderGrid();
        boxChangeColor();
    }
});

function boxChangeColor() {
    document.querySelectorAll(".box").forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            console.log(e.target.classList.add("bg-black"));
        });
    });
}
