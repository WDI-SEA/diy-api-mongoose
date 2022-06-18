const mongoose = require('mongoose')

// cretae blog schema

/*
Blog Schema
name: String
title: String
content: String
*/

const BlogSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength: 3,
        maxlength: 50
    },
    title:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 5000
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
}, {
    timestamps: true    
})


//  export a blog model
module.exports = mongoose.model('blog', BlogSchema)