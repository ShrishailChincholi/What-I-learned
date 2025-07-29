const express = require ('express');
const app = express();


// Chain Middleware 
app.use((req,res,next)=>{
    console.log("First Middleware ........");
    next();
});

app.use((req,res,next)=>{
    console.log("Second Middleware ........");
    next();
});

app.use((req,res,next)=>{
    console.log("Third Middleware ........");
    next();
});

app.get("/",(req,res)=>{
    return res.send("Hello I am Shrishail") ;
});

app.listen(8080,()=>{
    console.log("server is Runing check the Middleware ");
})