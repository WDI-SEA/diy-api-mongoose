// Get Mongoose in dis js app
const mongoose = require('mongoose');

// Create a schema
const AnimeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  episodes: Number,
  description: String,

}, {
  timestamps: true
});

AnimeSchema.methods.sayHello = function() {
  return `Hello! My name is ${this.name}!`
}

// Name the model
const Anime = mongoose.model('Anime', AnimeSchema);

// Export said model
module.exports = Anime;