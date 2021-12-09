const mongoose = require('mongoose')

let dinosaurSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength: 2,
        maxlength: 100
    },
    period:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Dinosaur", dinosaurSchema)