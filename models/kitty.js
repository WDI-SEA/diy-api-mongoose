//import mongoose
const mongoose = require('mongoose')

// define the embedded 'child' schema
const picSchema = new mongoose.Schema({
  imgUrl: String,
  // caption: String
});


//create kitty schema
const kittySchema = new mongoose.Schema({
  name: String,
  age: Number,
  parent: String,
  imgs: [picSchema]
}, {timestamps:true});


module.exports = mongoose.model("Kitty", kittySchema);
//export model


