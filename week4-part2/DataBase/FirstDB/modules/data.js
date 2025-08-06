const mongoose = require('mongoose');
const { type } = require('os');

// Creating Schema for Database
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, require: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  membershipNo: { type: String, required: true },

  address1: { type: String, required: true },
  address2: { type: String, required: true },

  homeParish: { type: String },
  homeDiocese: { type: String },

  bloodGroup: { type: String },
  googleMap: { type: String },

  membership: {
    type: String,
    enum: ["basic", "premium", "gold"],
    required: true
  },

  familyPicture: { type: String },
  profilePicture: { type: String },

  password: { type: String, required: true }
});

const DATABASE = mongoose.model("DATA", userSchema);

module.exports = DATABASE;