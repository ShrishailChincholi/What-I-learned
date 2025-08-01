const mongoose = require('mongoose');
const { type } = require('os');

const  userSchema = new mongoose.Schema({
    username:{type:String,require:true,unique:true},
    password:{type:String,require:true}
})

const User= mongoose.model("USer",userSchema);

module.exports = User