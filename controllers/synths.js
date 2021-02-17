const EXPRESS = require ('express');
const ROUTER = EXPRESS.Router();
const Synth = require('../models/synth');
//Create attempt prior to router
// const Synth = require('./models/synth');

// Synth.create({
//   name: 'TB 303',
//   manufacturer: 'Roland',
//   kind: 'Mono Bass Synthesizer',
//   releaseYear: 1982,
//   notableArtists: ['Phuture', 'Plastikman', 'Larry Heard', 'Adonis']
// }, (err, synth) => {
//   if (err) return console.error(`🤬 Troube in create:\n${err}`)
//     console.log(`${synth.name} has been created`)
// });

// Index - GET /synths
ROUTER.get('/', (req, res) =>{
  Synth.find({}, (err, synths) => {
    if (err) {
      console.error(`Error in synths Index route:\n${err}`);
      res.status(500).json({ error: 'Error in synths Index route'});
    }
    res.json({ synths });
  });
});
// Detail - GET /synths/:id

// CREATE - POST /synths

// UPDATE - PUT /synths/:id

// DELETE - DELETE /synths/:id

module.exports = ROUTER;