const express = require('express');
const app = express()
const fs = require('fs');
const path = require('path')


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
const datafile = path.join(__dirname,'data.json');

app.post('/home',(req,res)=>{
    const getdat = req.body
    let exisitingData = [];
    if(fs.existsSync(datafile)){
        const fileData = fs.readFileSync(datafile,'utf-8');
        if(fileData.trim() !==''){
            exisitingData = JSON.parse(fileData)
        }
    }

    exisitingData.push(getdat);

    fs.writeFileSync(datafile,JSON.stringify(exisitingData,null,2));
    
    console.log("Data Saved",getdat);
    res.redirect('/');
    
})

app.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080");
})