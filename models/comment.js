const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
  {
    content: String,
    blogger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', CommentSchema)
