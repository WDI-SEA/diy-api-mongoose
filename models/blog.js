const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema(
  {
    name: String,
    title: String,
    content: String,
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Blog', BlogSchema)
