// Mongoose Database connection in express
const express = require('express');
const app = express()


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
const mongoose = require("mongoose");

// Creating  schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true
    }
});

// Connect mongoose compass
mongoose.connect('mongodb://127.0.0.1:27017/userapp')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(" MongoDB Error", err));

// Creat model
const User = mongoose.model("user",userSchema);

app.post('/home', async(req,res)=>{
    const getdat = req.body
    // Save the data in monogoose
     try {
        const newUser = new User(getdat);
        await newUser.save();
        console.log(" Data saved to MongoDB:", getdat);
    } catch (err) {
        console.error("MongoDB Save Error:", err);
    }

        res.redirect('/');
    
})

app.listen(8080,()=>{
    console.log("Server is running on http://localhost:8080");
})