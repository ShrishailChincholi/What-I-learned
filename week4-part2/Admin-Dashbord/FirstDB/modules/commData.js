const mongoose = require ('mongoose');

const communSchema = new mongoose.Schema({
    name:{type: String, required: true }
})

const CommunitiesDB = mongoose.model("CommDB", communSchema);

module.exports = CommunitiesDB