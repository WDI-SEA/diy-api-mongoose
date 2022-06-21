//require necessary package 
const mongoose = require('mongoose')
//comment schema 
const commentSchema = new mongoose.Schema({
    header: String,
    content: String
},{
    timestamps: true
})
//blog schema
const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [commentSchema],

})

//export blog schema
module.exports = mongoose.model('Blog', blogSchema)