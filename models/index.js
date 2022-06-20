const mongoose = require("mongoose")

const uri = "mongodb://127.0.0.1/diy-api"
mongoose.connect(uri)

const db = mongoose.connection

db.once("open", () => {
  console.log(`MongoDB connection @ ${db.host}:${db.port}`)
})

db.on("error", (err) => {
  connsole.warn("Errorrrrr")
})

module.exports = {
  Blog: require("./blog"),
  User: require("./user"),
}
