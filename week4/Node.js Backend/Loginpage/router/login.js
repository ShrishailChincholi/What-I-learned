const bcrypt = require("bcryptjs");
const User = require("../modules/User");

const login = async (req, res) => {
    const { username, password } = req.body

    // Check user name in DB
   try {
     const user = await User.findOne({username});
    if (!user) {
         return res.send(" User not existes")
    }
    // Check user pass key in DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        // return res.redirect("/logout")
        return res.send(`
            <script>
                alert("Incorrect password!");
                window.location.href = "/login";
            </script>
        `);


    }
   
    // redirect my home page
    req.session.user = user;
    res.redirect("/");
   } catch (error) {
    console.log("Rigester is faild some internal issues",error)
   }

}

module.exports = login