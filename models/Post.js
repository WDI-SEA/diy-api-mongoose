const mongoose = require("mongoose")

// define mongoose schema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

// create mongoose model
// export the mongoose model
module.exports = mongoose.model("Post", BlogSchema)