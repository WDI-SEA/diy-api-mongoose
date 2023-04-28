const mongoose = require("mongoose")

//define a database name and URI and connect to it
const dbName = "Blog-app"
const uri = "mongodb://127.0.0.1/" + dbName
mongoose.connect(uri)

//use connection method to log important information
const db = mongoose.connection
// connsection success
db.once("open", () => console.log(`mongo is connected on ${db.host}:${db.port}`) )
// connection failure
db.on('error', err => console.log(' the detacenter has exploded:'. err))

// export all models
module.exports = {
  // export our models here
  Blog: require("./Blog")
}