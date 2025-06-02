const gridContainer = document.querySelector(".main-grid-cont");
let gridCount = 16;

for (let i = 0; i < gridCount; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("border", "flex-1", "flex");
    for (let j = 0; j < gridCount; j++) {
        const colDiv = document.createElement("div");
        colDiv.classList.add("border", "flex-1", "flex");
        rowDiv.appendChild(colDiv);
    }
    gridContainer.appendChild(rowDiv);
}
