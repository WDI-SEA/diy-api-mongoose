//require mongoose 
const mongoose = require('mongoose')

//define the schema 
// new mongoose.Schema({ fields }, { options })
const CommentSchema = new mongoose.Schema({
    blog: {
        // tell mongoose that this is a reference
        type: mongoose.Schema.Types.ObjectId,
        // tell mongoose what model is being referenced
        ref: 'Blog'
    },

    content: String

}, {
    timestamps: true
})

// export the schema so that it can be used by the CRUD
module.exports = mongoose.model('Comment', CommentSchema)