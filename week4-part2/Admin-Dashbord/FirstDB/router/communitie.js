const CommunitiesDB = require("../modules/commData");

const commData = async (req,res)=>{
    try {
        const {name} =req.body;
        const newdata = new CommunitiesDB({
            name
        })
        await newdata.save();
        res.redirect('communities');
        console.log("Communities data saved Succsefuuly");
    } catch (error) {
          console.log("ERROR saving Communities", error);
        res.status(500).send("ERROR RegistringCommunities")
    }
}

module.exports = commData;