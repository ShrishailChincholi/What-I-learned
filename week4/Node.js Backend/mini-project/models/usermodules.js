const mongoose = require('mongoose');
const { type } = require('os');

// schema
const userschema = new mongoose.Schema({
    UserName:{
        type:String,
        require:[true,'user name is required']
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        require:[true,'password is required']
    },
    address:{
        type:Array
    },
    phone:{
        type:String,
        require:[true,'phone number requires']
    },
    usertype:{
        type:String,
        require:[true,"user type is required"],
        default:'clinet',
        enum:['clinet','admin','vendor','driver']
    },
    profile:{
        type:String,
        default:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fprinceboy4788%2Fblank-profile-picture%2F&psig=AOvVaw0lOYNJJxFq7MCLU1gRncie&ust=1753778760801000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNiP05WV344DFQAAAAAdAAAAABAo'
    }
},{timestamps:true})

// export 
module.exports =  mongoose.model('User',userschema)