let boxes = document.querySelectorAll(".box");

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    let triggierbottam = window.innerHeight / 5 *4;
    boxes.forEach(box =>{
        let boxtop = box.getBoundingClientRect().top;
        if(boxtop<triggierbottam){
            box.classList.add("show");
        }else{
            box.classList.remove("show")
        }
    })
}