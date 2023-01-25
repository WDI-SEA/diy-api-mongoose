// require the mongoose package
const mongoose = require("mongoose")

// define the 'mongoose schema' which is key/value pairs of what we want our model to be
// type definitions, validations mongoose options all go in the schema
// mongoose.Schema({ key/val pairs for thr model}, {options object(mongoose config)})
const housewareSchema = new mongoose.Schema({
    name: {type: String},
    category: {type: String},
    url: {type: String}
}, {
    timestamps: true// mongoose will manage created at and updated fields for us
})

// turn the schema into a model so we can use it in our js
module.exports = mongoose.model('houseware', housewareSchema)