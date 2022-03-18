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
  nickname: String,
  imgUrl: [picSchema],
  age: Number,
  breed:String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps:true});


module.exports = mongoose.model("Kitty", kittySchema);
//export model


