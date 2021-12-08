const mongoose = require("mongoose")
mongoose.connect(
  "mongodb+srv://tgm98:1532@cluster0.ldlwy.mongodb.net/blog?retryWrites=true&w=majority"
)

const db = mongoose.connection 

db.once("open", () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on("error", (err) => {
  console.error("Database Error!", err)
})

module.exports.Blog = require('./blog')