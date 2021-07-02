// require mongoose package
const mongoose = require('mongoose')

//define mongoose schema
const PostSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title : {
        type: String
    },
    content : {
        type: String
    }
})

//build model from the schema or export the schema

module.exports = PostSchema