const mongoose = require("mongoose")

let dogSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        minlength: 2,
        maxlength: 100
    },
    breed: {
        type: String, 
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        default: "N/A"
    }
})

module.exports = mongoose.model("Dog", dogSchema)