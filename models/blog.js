//require necessary package 
const mongoose = require('mongoose')


//blog schema
const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: [{

        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
    
    
})

//export blog schema
module.exports = mongoose.model('Blog', blogSchema)