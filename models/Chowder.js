const mongoose = require('mongoose')

const ChowderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    age: {
        type: Number
    },
    isAlive: {
        type: Boolean
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Chowder", ChowderSchema)