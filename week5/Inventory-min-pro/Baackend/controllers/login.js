const bcrypt = require("bcryptjs");
const User = require("../modules/User");

const loginuser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Save session
    req.session.user = {
      _id: user._id,
      username: user.username,
      role: user.role,
    };

    // Send role to React
    return res.status(200).json({
      message: "Login successful",
      role: user.role,
    });

  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = loginuser;
