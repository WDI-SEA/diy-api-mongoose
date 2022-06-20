// require the mongoose package
const mongoose = require("mongoose")

// User schema
const UserSchema = new mongoose.Schema({
  name: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
})

module.exports = mongoose.model("User", UserSchema)
