// Random color genrator 
let box = document.querySelector(".box");
let rgb = document.querySelector(".p")

// random number genrator
function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

box.addEventListener("click",()=>{
    box.style.backgroundColor = randomColor();
    let color = randomColor()
    rgb.innerText=` ${color};`;
})

// html and css : week2/Js-projects/mini-pro