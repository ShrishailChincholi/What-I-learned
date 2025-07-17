// Age calculator

let btn = document.querySelector("button")



btn.addEventListener("click", getDate)

function getDate() {
    let datevalue = document.querySelector(".input").value;
    let p = document.querySelector("#p2");

    let birtdate = new Date(datevalue);
    let today = new Date;

    let age = birtdate.getFullYear() - today.getFullYear();
    p.innerText = `Your age is  ${age}`
}

// html,css:week2/jsprojects/age calculator
