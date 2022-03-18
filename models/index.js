const mongoose = require("mongoose")

// connect to the db
mongoose.connect("mongodb://localhost/futureProsthesis")
// grab the db connection
const db = mongoose.connection
// have some callback messages on the connection error
db.once("open", () => {
    console.log(`mongoose connected at ${db.host}:${db.port} 🦾`)
})

db.on("error", error => {
    console.log("An error occured with the Database")
    console.log(error)
})

// export the modules
module.exports.Post = require("./blog")