var defLength = 16;
var defHeight = 16;
var elements = document.getElementsByClassName("cell")

function initGrid(){
    length = defLength;
    height = defHeight;
    counter = 0;
    

    const grid = document.querySelector('#grid');

    for(let i = 0; i < length*height; i++){
        let cell = document.createElement("div");
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    grid.style.cssText = `grid-template-columns: repeat(${length}, 1fr); grid-template-rows: repeat(${length}, 1fr)`
}

document.addEventListener('click', function(){
    document.getElementById("reset").onclick = ()=>{
       reset();
    }
});

window.addEventListener('load', () => {
    initGrid();
    drawing();
});

function drawing(){
    Array.from(elements).forEach(function(element) {
        element.addEventListener('mouseover', function(){
            element.onmouseo
                element.style.backgroundColor = "black";
        });
    });
}

function reset(){
    Array.from(elements).forEach(function(element) {
        element.style.backgroundColor = "white";
    });
}





