const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
},{
    timestamps: true

})
module.exports=BlogSchema