let input = document.querySelector(".inp");
let button = document.querySelector("#btn1");
let list = document.querySelector(".added");

// input = enter a list
// button = add me
// list = ul

let addevents =()=>{
    let stored=input.value;

    let ulList= document.createElement("li");
   
    ulList.textContent=stored;

    let btndelete = document.createElement("button");
    btndelete.textContent ="delete"
    list.appendChild(btndelete);
    btndelete.addEventListener("click",()=>{
        ulList.remove();
      })

    ulList.appendChild(btndelete);
    list.appendChild(ulList)
    
    
    input.value = "";

   
}
// when we add a task click to button
button.addEventListener("click",addevents)

