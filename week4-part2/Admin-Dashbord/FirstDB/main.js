const express = require('express');
const path = require('path');
const app = express();
const ConnectDatabase = require('./db/connection');
const memberRejData = require('./router/memberData');
const multer = require("multer");
const { render } = require('ejs');
const DATABASE = require('./modules/data');

// Middleware
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer config for Uplods photo database
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

ConnectDatabase();

app.get('/', async (req, res) => {
    res.render('index');
});

// POST DATA
app.post("/index",
    upload.fields([
        { name: "fimg", maxCount: 1 },
        { name: "pimg", maxCount: 1 }
    ]), memberRejData

);

// Show the user
app.get("/alluser", async (req, res) => {
    try {
        const members = await DATABASE.find();
        res.render("alluser", { members });
    } catch (error) {
        res.status(500).send("Error retrieving members");
    }
});

// Geting Communities
app.get("/communities", async (req, res) => {

    try {
        const datacomm = await CommunitiesDB.find();
        res.render("communities", { datacomm });
    } catch (error) {
        res.status(500).send("Error retrieving members");
    }

})

// Dashbord
app.get("/dashbord", (req, res) => {
    res.render("dashbord")
})

// Magecommunite Geting routes
app.get("/magecommunities", (req, res) => {
    res.render("magecommunities")
})

// Magecommunite Post routes
app.post("/magecommunities",community);
app.get("/magecommunities", async(req, res) => {
    // res.render("")
       try {
        const magecomm = await mangaecommunity.find();
        res.render("magecommunities", { magecomm });
    } catch (error) {
        res.status(500).send("Error retrieving members");
    }

})

// Post Communites
app.post("/communities", commData)

app.listen(5000,()=>{
    console.log("Server is running on http://localhost:5000");
});