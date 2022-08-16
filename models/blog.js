const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: String
})

// make schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  name: String,
  comments: [commentSchema]
},{timestamps:true})

// make model and export it 
module.exports = mongoose.model('Blog', blogSchema)
