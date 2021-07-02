const mongoose = require('mongoose')

const BeerSchema = new mongoose.Schema({
    name:String,
    description:String,
    rating:Number
}, {
    timestamps:true
})

module.exports = BeerSchema