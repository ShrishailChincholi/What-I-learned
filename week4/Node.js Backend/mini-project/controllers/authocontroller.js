const usermodules = require("../models/usermodules")

const registercontroler = async(req,res)=>{
    try {
        const {username,email,password,phone,address}=req.body
        // valdation
        if(!username||!email||!password||!phone||!address){
            return res.status(500).send({
                success:false,
                message:"plase Provide all fields"
            })

        }
        // check user
        const existinguser = await usermodules.findOne({email})
        if(existinguser){
            return res.status(500).send({
                success:false,
                messageL:'email alrady existi plases login '
            })
        }

        //  create user
        const user = await usermodules.create({username,password,email,address,phone})
        res.status(200).send({
            success:true,
            message:'Successfully registred'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'eroor in rigistration API',
            error

        })
    }

}

module.exports = registercontroler