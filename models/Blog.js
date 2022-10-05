// require the mongoose package
const mongoose = require('mongoose')
/*
name: String

*/
// define a mongoose schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    post: {
        type: String
    }
}, {
    timestamps: true
})

// create the mongoose model
// export the mongoose model
module.exports = mongoose.model('Blog', BlogSchema)