const express = require('express');
const app = express();

app.get("/login",(req,res)=>{
    // read authorization header

    const auth = req.headers.authorization;
    console.log("Authorization Header",auth);

    if(!auth){
        return res.status(500).send("No Authorization header found!!!!!!!!!!!")
    }

    // Token
    const logintoken = "MyTokenvalue"

    // remove Bearer in extract part 
    const token = auth.split(' ')[1];

    if(token==logintoken){
        res.send("Acess Greanted ! You Enter A correct Token")

    }else{
         res.status(403).send(" Invalid token try Again");
    }
});


app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});