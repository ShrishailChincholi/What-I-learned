// connection DB
const coonectdb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://USERNAME:PASSWORD@CLUSTER_NAME.mongodb.net/DATABASE_NAME")
    } catch (error) {
        console.log("Database Connection is failed ")
    }
}

module.exports = coonectdb;