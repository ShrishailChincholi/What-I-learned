// Real Time Chareter Counter
let inputext = document.querySelector(".text");
let totalCounterEl = document.querySelector(".total-counter");


inputext.addEventListener("keyup",()=>{
    updatecount();
})

// counting the word
let updatecount= ()=>{
    totalCounterEl.innerText = inputext.value.length;
}

// html&CSS :week2/js-projects/RTCcounter
