const express = require("express");
const conectdb = require("./config/db");
const session = require("express-session");
const cors = require("cors");
const login_rigste = require("./routes/login& register");  

const app = express();

// Database
conectdb();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Trust proxy
app.set("trust proxy", 1);

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session (must come before routes)
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  })
);

// Routes
app.use("/", login_rigste);
app.use("/admin",productroutes)


// Admin check
function isAdmin(req, res, next) {
  if (!req.session.user || req.session.user.role !== "admin") {
    return res.status(403).send("Access Denied: Admins only!");
  }
  next();
}

app.get("/admin-dashboard", (req, res) => {
  res.json({ message: "Admin page woreking" });
});


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
