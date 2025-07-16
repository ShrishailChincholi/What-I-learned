let btn = document.querySelector("button")
let datevalue = document.querySelector(".input").value;
let p = document.querySelector("#p2");


btn.addEventListener("click", getDate)

function getDate() {

    let birtdate = new Date(datevalue);
    let today = new Date;

    let age = birtdate.getFullYear() - today.getFullYear();
    p.innerText = `Your age is  ${age}`
}








