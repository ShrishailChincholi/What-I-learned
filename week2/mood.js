let mood = document.querySelector(".mood");

let curentm = "Light"

//  logic mood change
const moodchanger = () =>{
    if(curentm === "Light"){
        curentm="Dark";
        document.querySelector("div").style.backgroundColor="#01161e";
        document.querySelector("h2").style.color="white"
        document.querySelector("div").style.border="1px solid white"
        document.querySelector("h2").innerText="You Entered A New mood"
       

    }else{
        curentm="Light";
        document.querySelector("div").style.backgroundColor="white";
        document.querySelector("h2").style.color="black"
        document.querySelector("div").style.border="1px solid black"
        document.querySelector("h2").innerText="The Cureent mood is Light"
     
    }
console.log(curentm);

};
// calling funcation 
mood.addEventListener("click",moodchanger);