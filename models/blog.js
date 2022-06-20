const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
  {
    header: String,
    content: String,
  },
  {
    timestamps: true,
  }
)
const BlogSchema = new mongoose.Schema({
  title: String,
  body: String,
  comments: [CommentSchema],
  blogger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

module.exports = mongoose.model("Blog", BlogSchema)
