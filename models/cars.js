const mongoose = require('mongoose')


const CarSchema = new mongoose.Schema({
    make: {type: String, required: true}, // throws err if not present
    model: {type: String, required: true},
    trim: String,
    price: {type: Number, default: 10000},
    hp: {type: Number},
    driven: Boolean,
}, {
    timestamps: true
})

// export bounty model
module.exports = mongoose.model('car', CarSchema)