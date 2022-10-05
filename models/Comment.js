const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
})

module.exports = mongoose.model('Comment', commentSchema)