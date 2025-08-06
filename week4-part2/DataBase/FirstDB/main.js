const express = require('express');
const path = require('path');
const app = express();
const ConnectDatabase = require('./db/connection');
const memberRejData = require('./router/memberData');
const multer = require("multer");
const DATABASE = require('./modules/data');

// Middleware
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', async (req, res) => {
    res.render('index');
});

app.post("/index",
    upload.fields([
        { name: "fimg", maxCount: 1 },
        { name: "pimg", maxCount: 1 }
    ]), memberRejData

);

app.get("/alluser", async (req, res) => {
    try {
        const members = await DATABASE.find();
        res.render("alluser", { members });
    } catch (error) {
        res.status(500).send("Error retrieving members");
    }
});

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
});