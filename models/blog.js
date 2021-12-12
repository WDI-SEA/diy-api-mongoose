const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    
    title: {
        type:String,
        required: true,

    },
    author:{
        type:String,
        required:true
    },
    content:{
        type:String
    },
    genre:{
        type:String,
        required:true
    }

})

module.exports =mongoose.model('Blog', blogSchema )