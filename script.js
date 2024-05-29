const container = document.querySelector(".container");

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("container-row");
        container.appendChild(div);
        for (let i = 0; i < 16; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            div.appendChild(box);
        }
    }
    
});