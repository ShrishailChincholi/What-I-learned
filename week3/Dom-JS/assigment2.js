// Currance Exchanger js code-------->
BASE_url ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropD = document.querySelectorAll(".drop select");
const btn =document.querySelector("button")
const fromCurr =document.querySelector(".form select")
const toCurr =document.querySelector(".to select")
const msg = document.querySelector(".msg")

for(let select of dropD){
    for  (code in countryList){
    let newoption = document.createElement("option")
    newoption.innerText= code;
    newoption.value=code;
    if(select.name ==="form" && code==="USD"){
        newoption.selected="selected"; 
    }else if(select.name ==="to" && code==="INR"){
        newoption.selected="selected"; 
    }
    select.append(newoption);
    select.addEventListener("change",(evt)=>{
        flag(evt.target)
    })
}}


const flag =(element)=>{
    let curcod = element.value
    let contrycode = countryList[curcod];
    let newsrc = `https://flagsapi.com/${contrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src=newsrc
}

btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount  = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval === "" || amtval<1){
        amtval= 1;
        amtval.value ="1"
    }
    // calling API 
    const URL = `${BASE_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response =  await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalamount = amtval*rate;
    msg.innerText=`${amtval} ${fromCurr.value} = ${finalamount} ${toCurr.value}`
   
})

//html and css-week2/currance-EX 

