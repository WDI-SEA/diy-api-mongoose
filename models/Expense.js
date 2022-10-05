const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    date: {
        type: String
    },
    merchant: {
        type: String
    },
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Expense', ExpenseSchema)