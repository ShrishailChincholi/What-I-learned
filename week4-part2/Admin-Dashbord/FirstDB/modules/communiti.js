const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name: {type:String,require:true},
    categoryType: {type:String,require:true},
    isActive: {type:Boolean,require:true},
    minAmount: {type:String,require:true},
    remarks:{type:String,require:true},
});
const mangaecommunity = mongoose.model("CommunitiesDB", communitySchema);
module.exports = mangaecommunity