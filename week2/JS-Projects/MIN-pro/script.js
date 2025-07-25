let box = document.querySelector(".box");
let p = document.querySelector(".p")

function random(number) {
  return Math.floor(Math.random() * number);
}


function randomColor() {

  return `rgb(${random(255)} ${random(255)} ${random(255)})`;
}

box.addEventListener("click",()=>{
    
    box.style.backgroundColor = randomColor();
    let color = randomColor();
    p.innerText=` ${color};`;
});

