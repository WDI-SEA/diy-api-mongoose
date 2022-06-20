const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
    title: String,
    detail: String,
    date: Date,
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car'
    }
})

module.exports = mongoose.model('History', historySchema )