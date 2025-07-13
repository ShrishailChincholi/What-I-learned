let div = document.querySelector(".time");
let date = document.querySelector(".date");


//  adding Date,Time in webpage
let update=() =>{
    const now = new Date();

    let arr=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
    let daysname = arr[now.getDay()];
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const day = now.getDate();

    const month =  ["January", "February", "March", "April", "May", "June", "July",
                      "August", "September", "October", "November", "December"];
    const monthName = month[now.getMonth()];

    const year = now.getFullYear();
    div.innerText = `${h}:${m}:${s} ${ampm}`;  //${ampm}
    date.innerText = `${daysname} ${day},  ${monthName}, ${year}`;
}

// setInterval is  build for showing contuinue secondes
setInterval(update,1000)

// callinf funcation
update();



