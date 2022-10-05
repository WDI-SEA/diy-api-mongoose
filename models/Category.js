const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    budget: {
        type: Number
    },
    expenses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expense'
    }
})

module.exports = mongoose.model('Category', CategorySchema)