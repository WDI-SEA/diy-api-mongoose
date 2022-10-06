const mongoose = require("mongoose")

const uri = "mongodb://127.0.0.1/songs"
mongoose.connect(uri)
const db = mongoose.connection

db.once("open", () => console.log(`mongoDB connected at ${db.host}:${db.port}`))
db.on("error", (err) => console.warn("the data center is not having it", err))
module.exports = {
    Song: require("./Song"),
    Comment: require("./Comment")
}