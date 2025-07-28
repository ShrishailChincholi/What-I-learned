const express = require('express');
const cors = require('cors');
const morgan = require("morgan")
const dotenv = require("dotenv");
const connectdb = require('./config/db');


const app = express();

// dot en configuration 
dotenv.config()

// DB connection
connectdb

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))

// routes
app.use("/auth",require('./routes/authoroutes'))


app.get("/",(req,res)=>{
    return res.send("HI Iam shrishail");
})

// PORT
const PORT=process.env.PORT


// listen
app.listen(PORT,()=>{
    console.log(`server runing on ${PORT}`)
})