const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    animal: {
        type: String,
        require: true
    },
    nickname: {
        type: String,
    },
    age: Number,
    weight: Number,
    favoriteToy: [String]
}, {
    timestamps: true
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet