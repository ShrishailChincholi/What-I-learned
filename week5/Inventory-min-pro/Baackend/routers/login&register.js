const loginuser = require("../controllers/login");
const rigister = require("../controllers/register");

const express = require("express");

const routes = express.Router();

// Register route
routes.post("/register", rigister);

// Login route
routes.post("/login", loginuser);

module.exports = routes;