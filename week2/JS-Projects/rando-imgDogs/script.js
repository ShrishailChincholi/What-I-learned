let img = document.querySelector(".img");
let btn = document.querySelector("button");

let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",()=>{
    alert("You want to  change the img?")
    genarateimg();
});

const genarateimg = async ()=>{
    let response = await fetch(url);
    console.log(response );
    let data =  await response.json();
    img.src=data.message;
    return data
}

