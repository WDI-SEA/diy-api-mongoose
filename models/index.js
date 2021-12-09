const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/bounty-hunter')

const db = mongoose.connection

db.once("open", ()=>{
    console.log(`connected to MongoDB at ${db.host}:${db.port}`)
})

db.on("error", (err) => {
    console.error(`Database error!!!:\n${err}`)
})


module.exports.Dog = require("./dog")