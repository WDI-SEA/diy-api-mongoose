const mongoose = require('mongoose')
const router = require('../controllers/v1/pkdMovies')

const bookSchema = new mongoose.Schema({
    book: {
        type: String
    }
})

const directorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    projects: Array
})

const adaptationSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    basedOn: bookSchema,
    directedBy: directorSchema
})

// module.exports = mongoose.model('Book', bookSchema)
// module.exports = mongoose.model('Director', directorSchema)
module.exports = mongoose.model('Adaptation', adaptationSchema)