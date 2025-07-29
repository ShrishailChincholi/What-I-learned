// Main app 
const express = require ('express');
const Router = require('./router/first.js');


const app = express();

// Router export
app.use('/api',Router)

app.listen(8080,()=>{
    console.log("server is Runing check the Middleware ");
})


// Router folder in first.js
// Router level middleware
const express = require('express');
const Router = express.Router();

Router.use((req,res,next)=>{
    console.log("Router a Specfic middleware");
    next();
})

Router.get('/user/:id',(req,res)=>{
    res.send("user Profile")
})

module.exports= Router;