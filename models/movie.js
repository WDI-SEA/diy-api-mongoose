const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    producer: String,
    img: String
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
