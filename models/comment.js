const mongoose = require ('mongoose')

// |blog | ObjectId(ref to blog) |
// |content | string |

// child embedded schema
const commentSchema = new mongoose.Schema({
   content: {
      type: String, 
      required: true
   },
   // can belong to 1 blog
   blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
   }
}, {timestamps: true})

// turn it int o a mode and export
module.exports = mongoose.model('Comment', commentSchema)

