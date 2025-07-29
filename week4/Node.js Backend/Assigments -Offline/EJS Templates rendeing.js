const { render } = require('ejs');
const express = require ('express');
const app = express();

const Port = 5050;

// set the views engine to ejs
app.set('view engine', 'ejs');

// set the diretory where templates file are located

app.set('views','./views');

// Route the template

// EJS support to myproject and created a homepage and display using a render();
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/about',(req,res)=>{
    res.render('about');
});


app.listen(Port,()=>{
    console.log("server is runing")
})