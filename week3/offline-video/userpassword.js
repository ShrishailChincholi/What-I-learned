function loginuser(name,password){
    return Promise((res,rej)=>{
        setInterval(()=>{
            if(name === "shrishail" && password ==="12345"){
                res("Login successfully")
            }else{
                rej("Login failed")
            }
        },1000)
    })
}

async function Login() {
    let name = document.querySelector(".user").value;
    let pass = document.querySelector(".password").value;
    try{
        let message = await loginuser(name.pass);
        document.querySelector(".p").textContent=message;
    } catch(err){
        document.querySelector(".p").textContent =err;
    }
    
}