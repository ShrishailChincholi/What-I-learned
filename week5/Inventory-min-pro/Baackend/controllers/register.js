const bcrypt = require("bcryptjs");
const User = require("../modules/User");

// Register handler
const register = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send("User already exists");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            username,
            password: hashedPassword,
            role: role || "user"
        });

        await newUser.save();

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                username: newUser.username,
                role: newUser.role
            }
        });

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).send("Error registering user");
    }
};

module.exports = register;
