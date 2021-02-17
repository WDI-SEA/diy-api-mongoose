const mongoose = require('mongoose')

//create a schema
const userSchema = new mongoose.Schema({
    name: String,
    show: String,
    meta: {
        age: Number
    },
    timestamp: true
})

//Here is where you actually name the model. NAME IT SINGULAR!
const User = mongoose.model(User, userSchema)

//Make this available to our other files
module.exports = User