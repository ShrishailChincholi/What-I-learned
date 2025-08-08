const CommunitiesDB = require("../modules/commData");

const community = async (req, res) => {
    try {
       const { name, categoryType, isActive, minAmount, remarks } = req.body;

        // Save to your DB (assuming Mongoose)
        const newCategory = new CommunitiesDB({
            name:name,
            categoryType,
            isActive: isActive === "on", // checkbox returns "on" if checked
            minAmount,
            remarks
        });

        await newCategory.save();

        // After saving, you can redirect or respond
        console.log("Manage Categories Data was Saved")
        res.redirect("/home"); // reload page
    } catch (error) {
        console.error("Error saving category:", error);
        res.status(500).send("Server error");
    }
}
module.exports = community;