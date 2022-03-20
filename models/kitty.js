//import mongoose
const mongoose = require('mongoose')

// define the embedded 'child' schema
const picSchema = new mongoose.Schema({
  imgUrl: String,
  caption: String
},{timestamps:true});

//create kitty schema
const kittySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  age: Number,
  parent: String,
  img: [picSchema]
}, {timestamps:true});


module.exports = mongoose.model("Kitty", kittySchema);
//export model


