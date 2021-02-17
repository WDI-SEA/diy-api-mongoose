// req mongoose
const MONGOOSE = require('mongoose');

// create a schema
const synthSchema = new MONGOOSE.Schema({
  name: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    required: true
  },
  releaseYear: Number,
  notableArtists: [String],
}, {
  timestamps: true
});

// methods

// name model
const Synth = MONGOOSE.model('Synth', synthSchema);

// export the model 
module.exports = Synth;