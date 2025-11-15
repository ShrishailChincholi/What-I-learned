const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productrouters = require('./routes/product.route')

// Used for json fromat data entry
app.use(express.json());
// used for Qurayes forms
app.use(express.urlencoded({ extended: false }))

app.use("/api/pro", productrouters)

app.get('/', (req, res) => {
    res.send("hello form node api ")
})

// Connection Mongoose 
mongoose.connect("mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME")
    .then(() => {
        console.log("DB connected");
    })
    .catch(() => {
        console.log("connection filed")
    })

    
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})