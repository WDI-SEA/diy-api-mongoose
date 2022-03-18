const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  body: String,
  date: Date,
});
