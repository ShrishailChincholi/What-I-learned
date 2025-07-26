const express = require('express');

const app = express();

const PORT = 3000;

// Define a simple route
app.get('/',(req,res)=>{
    res.send("First Exprsee code ");
})

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})