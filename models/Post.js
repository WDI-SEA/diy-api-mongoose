// require the mongoose package
const mongoose = require('mongoose')

// define a mongoose schema
const PostSchema = new mongoose.Schema({
  name: String,
  title: String,
  content: String
})

// build a model from the schema or export the schema

module.exports = PostSchema