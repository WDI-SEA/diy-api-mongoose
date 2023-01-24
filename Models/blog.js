const mongoose = require('mongoose');

/*
name: String
title: String
content: String
{ timestamps }
*/

// define a mongoose schema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String, 
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema)