
let inputext = document.querySelector(".text");
let totalCounterEl = document.querySelector(".total-counter");


inputext.addEventListener("keyup",()=>{
    updatecount();
})


let updatecount= ()=>{
    totalCounterEl.innerText = inputext.value.length;
}
