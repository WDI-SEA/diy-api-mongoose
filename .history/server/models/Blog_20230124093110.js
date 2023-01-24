const mongoose = require('mongoose');

//define a simple
const blogSchema = new mongoose.Schema({
    name :
    { type: 'String', required: true },
    
    title: String,
    content: String,
})