const mongoose = require ('mongoose')

// |name | string |
// |title | integer |
// |content | string |

// make model schema
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    // many comments 1:M
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {timestamps: true})

// turn it to a model and export
module.exports = mongoose.model('Blog', blogSchema)

