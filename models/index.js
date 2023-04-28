const mongoose = require("mongoose")

const dbName = "diyApiBlog"
const uri = "mongodb://127.0.0.1/" + dbName
mongoose.connect(uri)

const db = mongoose.connection
db.once("open", () => console.log(`mongoose is mongoosing on ${db.host}:${db.port} 🦇`))
db.on("error", err => console.log("mongoose is mad 🤬", err))

module.exports = {
    Blog: require("./Blog")
}