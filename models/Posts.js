// require mongoose package
const mongoose = require('mongoose')

//define mongoose schema
const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        //Default is false but you can add required if you need it
        required: true
    },
    title : {
        type: String,
        required: true
    },
    content : {
        type: String,
        //can add min/max of the string entered
        required: true,
        minlength: 2,
        maxlength: 100
    }
})

//build model from the schema or export the schema

module.exports = PostSchema