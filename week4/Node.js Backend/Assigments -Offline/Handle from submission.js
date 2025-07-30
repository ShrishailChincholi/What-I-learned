const express = require ('express');
const app  = express();

app.use(express.static("public"));

//middleware that parses incoming HTML form data and makes it available in req.body
app.use(express.urlencoded())


app.post('/contact',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
});

 app.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080");
})
