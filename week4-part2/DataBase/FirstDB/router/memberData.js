const bcrypt = require("bcryptjs");
const DATABASE = require("../modules/data");

const memberRejData = async (req, res) => {
    try {
        const { name, Number, email, ID, Address1, Address2, Home, Home2, Blood, map, membership, password } = req.body;
        const hashedpass = await bcrypt.hash(password, 10);
        const newMember = new DATABASE({
            name,
            number: Number,
            email,
            address1: Address1,
            address2: Address2,
            homeParish: Home,
            homeDiocese: Home2,
            bloodGroup: Blood,
            googleMap: map,
            membershipNo: ID,
            membership: membership,
            password: hashedpass,
            familyPicture: req.files.fimg ? req.files.fimg[0].filename : null,
            profilePicture: req.files.pimg ? req.files.pimg[0].filename : null,
        });

        await newMember.save();

        console.log("Member saved Succsefuuly");
        res.render('index');
    } catch (error) {
        console.log("ERROR saving Member", error);
        res.status(500).send("ERROR Registring memner")

    }
};

module.exports = memberRejData