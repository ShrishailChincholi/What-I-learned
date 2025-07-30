const express = require ('express');
const app  = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.urlencoded())


app.post('/contact',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
});


// use a midflewaew funncation with no specific route
app.use((req,res)=>{
    res.status(405)
   res.render('index')
})

 app.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080");
})
