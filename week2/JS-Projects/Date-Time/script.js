let div = document.querySelector(".time");
let date = document.querySelector(".date");


//  adding Date,Time in webpage
let update=() =>{
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
   div.innerText =`${h}:${m}:${s}`
   date.innerText = ` ${day}, ${month + 1}, ${year}`;
}

// setInterval is  build for showing contuinue secondes
setInterval(update,1000)

// callinf fucation
update();