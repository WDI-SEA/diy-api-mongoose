const mongoose = require('mongoose')
const router = require('../controllers/v1/pkdStories')

const pkdStorySchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    book: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    movieYear: Number,
    bookYear: Number
})

module.exports = mongoose.model('PkdStory', pkdStorySchema)