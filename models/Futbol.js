const mongoose = require('mongoose')
const FutbolSchema = new mongoose.Schema({
    name: {type: String},
    club: {type: String},
    country: {type: String},
    age: {type: String},
    rating: {type: Number},
}, {
    timestamps: true
})
module.exports = mongoose.model('Futbol', FutbolSchema)