const { default: mongoose } = require('mongoose')


const prodcutSchema =  mongoose.Schema(
    {
        name:{
            type:String,
            require:[true,"Enter u name"],
        },

        quantity:{
            type:Number,
            require:true,
            default:0
        },
        price:{
            type:Number,
            require:true,
            default:0
        }
    }
)

const product = mongoose.model("Product",prodcutSchema);

module.exports = product;