const User = require("../modules/User");
const bcrypt = require("bcryptjs");

// Register handele router
const rigister = async (req, res) => {
    const { username, password } = req.body

    try {
        // check the user is existit or no
        const existinguser = await User.findOne({username});
        if(existinguser){
            res.send(" User already exists")
        }
        // storing Hashpassword 
        const hashedPassword = await bcrypt.hash(password, 10);

        // Stroe in the database
        const newUser = new User({username,password:hashedPassword})
        await newUser.save();
        return res.redirect("/login");
        
        
        res.status(201).send("User registered successfully");

    } catch (error) {
        console.error("MongoDB Save Error:", error);
    }
}

module.exports =rigister