const CONTAINER_DIV = document.querySelector(".container");

let canvasSize = 16;

function createDivs(sides) {
    
    //create loop so it makes 16 divs
    for (let i = sides; i > 0; i--)  {

        const NEW_DIV = document.createElement("div");
        NEW_DIV.addEventListener("mouseenter", () => NEW_DIV.style.backgroundColor = "#1860c6");
        CONTAINER_DIV.appendChild(NEW_DIV);
    };

};

createDivs(canvasSize);


const BUTTON = document.querySelector("button.canvas");

BUTTON.addEventListener("click", () => {
    CONTAINER_DIV.textContent = "";
    canvasSize = Number(prompt("Please enter canvas size: ", 16));
    createDivs(canvasSize);
});