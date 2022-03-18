const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  name: String,
  content: String,
  date: {
    type: Date,
    default: new Date()
  }
}, {timestamps: true})

const blogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2
  },
  title: {
    type: String,
    required: true,
    minLength: 2
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date()
  },
  comments: [commentSchema]
}, {timestamps: true})

module.exports = mongoose.model('Blog', blogSchema)