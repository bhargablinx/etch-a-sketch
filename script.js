const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let input = prompt("Number of squares per side: ");;
    input = Number(input);
    if (input > 100 || input < 0) {
        alert("Invalid Input!")
        return 1;
    }
});

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
    const allBox = document.querySelectorAll(".box");
    allBox.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = generateJustOneColor();
        });
    });
});


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
	return hexCharacters[index]
}
// generates a random color
// Credit: https://www.freecodecamp.org/news/generate-colors-in-javascript/
function generateJustOneColor(){
	let hexColorRep = "#";
    for (let position = 0; position < 6; position++){
        const randomPosition = Math.floor ( Math.random() * hexCharacters.length );
    	hexColorRep += getCharacter( randomPosition );
    }
	return hexColorRep;
}