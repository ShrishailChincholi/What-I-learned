const mongoose = require("mongoose");

// db coonection
 const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To Database ${mongoose.Connection.host}`)
    } catch (err) {
        console.log("DB Eroor")
    }
}

module.exports =connectdb