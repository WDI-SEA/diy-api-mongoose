
const mongoose = require('mongoose');

// make schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    user: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);