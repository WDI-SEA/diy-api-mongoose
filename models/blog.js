const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  body: String,
  date: Date,
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  blogger: {
    type: String,
    required: true,
  },
  comment: [commentSchema],
});

module.exports = mongoose.model("Blog", blogSchema);
