const CONTAINER_DIV = document.querySelector(".container");

function create16Divs() {
    
    //create loop so it makes 16 divs
    for (let i = 16; i > 0; i--)  {

        const NEW_DIV = document.createElement("div");
        NEW_DIV.addEventListener("mouseenter", () => NEW_DIV.style.backgroundColor = "lightblue");
        CONTAINER_DIV.appendChild(NEW_DIV);
    };


};

create16Divs();


