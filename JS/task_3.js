let divCont = document.getElementById("container");
let block3Separator = document.getElementById("block3-separator");
let tagPositionIndex = 0;
let colors = ["red", "green", "blue", "pink", "yellow", "purple"];

for (tagPositionIndex = 1; tagPositionIndex <= 5; tagPositionIndex++) {
    let divElem = document.createElement("div");
    
    divElem.innerHTML = 'Element <span class=el_text_color>' + tagPositionIndex + '</span>';
    divElem.classList.add('element');
    divCont.appendChild(divElem); 
    container.insertBefore(divElem, block3Separator);
};

for (tagPositionIndex = 0; tagPositionIndex < 5; tagPositionIndex++) {
    let elTextColor = document.getElementsByClassName("el_text_color");
    elTextColor[tagPositionIndex].style.color = colors[tagPositionIndex];
};
