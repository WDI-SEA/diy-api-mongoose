const mongoose = require("mongoose")

const genreSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
)

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: String,
    genres: [genreSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Book", bookSchema)
