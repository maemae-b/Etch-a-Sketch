const CONTAINER_DIV = document.querySelector(".container");

let canvasSize = 16;

function createDivs(sides) {
    
    for (let i = sides ** 2; i > 0; i--)  {

        const NEW_DIV = document.createElement("div");
        NEW_DIV.addEventListener("mouseenter", () => {
            NEW_DIV.style.backgroundColor = "#1860c6"
            let opacityValue = Number(NEW_DIV.style.opacity);
            NEW_DIV.style.opacity = `${opacityValue + 0.1}`;});
        let width = 100/sides;
        NEW_DIV.style.width = `${width}%`;
        NEW_DIV.style.opacity = "0.1";
        CONTAINER_DIV.appendChild(NEW_DIV);
    };

};

createDivs(canvasSize);


const BUTTON = document.querySelector("button.canvas");

BUTTON.addEventListener("click", () => {
    CONTAINER_DIV.textContent = "";
    canvasSize = Number(prompt("Please enter canvas size: ", 4));
    createDivs(canvasSize);
});