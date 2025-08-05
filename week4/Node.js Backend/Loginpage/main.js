const express = require("express");
const session = require("express-session");
const app = express()
const connectDB = require("./config/config");
const rigister = require("./router/resigter");
const login = require("./router/login");

// Db Connection
connectDB()

// Configuring Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// home page
app.get("/", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }
    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.render("logout", { user: req.session.user, users }); // render EJS page with both
    } catch (err) {
        console.error("Error fetching users:", err);
        res.send("Error loading page");
    }
});

// register page

app.get("/register", (req, res) => {
    res.render('register')
})


app.post('/register', rigister)

// Login page
app.get("/login", (req, res) => {
    res.render("login")
})
app.post('/login', login)

// logout the home page to login page
app.get("/logout", async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error("Logout Error:", err);
            return res.status(500).send("Could not log out");
        }
        res.clearCookie("connect.sid");
        return res.redirect("/login");
    });

    try {
        const users = await User.find(); // Fetch all users from MongoDB
        res.render("logout", { users }); // Pass data to EJS
    } catch (err) {
        res.send("Error fetching data");
    }
});



// Contact Page
app.get("/contact", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login"); // Prevents opening without login
    }

    res.render("contact", { user: req.session.user });
});

app.get("/home",async (req, res) => {
   try {
    const users = await User.find(); // Fetch all users from MongoDB
    res.render("home", { users }); // Pass data to EJS
  } catch (err) {
    res.send("Error fetching data");
}
});


// feacthing the datafrom database
app.get("/logout", async(req,res)=>{
    try {
    const users = await User.find(); // Fetch all users from MongoDB
    res.render("logout", { users }); // Pass data to EJS
  } catch (err) {
    res.send("Error fetching data");
}}
);


app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
})