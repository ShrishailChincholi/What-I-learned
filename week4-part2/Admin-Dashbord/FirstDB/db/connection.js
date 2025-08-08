const mongoose = require('mongoose');

const ConnectDatabase = async ()=>{
    try {
        await mongoose.connect("URL")
    } catch (error) {
        console.log("Database Connection is failed ")
    }
}

module.exports = ConnectDatabase;