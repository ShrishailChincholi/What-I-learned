const express = require ('express');
const app  = express();

// Serve static files from "public" folder
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.send("hello")
});


 app.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080");
})

