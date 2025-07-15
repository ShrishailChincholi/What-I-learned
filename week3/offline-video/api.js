// Assignmet 1
//API LINK
let URL = " https://cat-fact.herokuapp.com";
let fact = document.querySelector("#fact")
let btn = document.querySelector("#btn")

const getfacts= async () =>{
    console.log("Facts is gating soon...")
    // calling api 
    let response = await fetch(URL);
    let data = await response.json();
    fact.innerText = data[2].text;
};

btn.addEventListener("click",getfacts)