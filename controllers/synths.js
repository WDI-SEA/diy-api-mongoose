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
ROUTER.get('/:id', (req, res) => {
  Synth.findById(req.params.id, (err, synth) => {
    if (err) {
      console.error(`Error in synths Detail route:\n${err}`);
      res.status(500).json({ error: 'Error in synths Detail route'});
    }
    res.json({ synth });
  });
});
// CREATE - POST /synths
ROUTER.post('/', (req, res) => {
  console.log(req.body);
  Synth.create(req.body, (err, synth) =>{
    if (err) {
      console.error(`Error in synths Create route:\n${err}`);
      res.status(500).json({ error: 'Error in synths Create route'});
    }
    res.json({ synth });
  });
});
// UPDATE - PUT /synths/:id
ROUTER.put('/:id', (req, res) => {
  Synth.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, synth) =>{
    if (err) {
      console.error(`Error in synths Update route:\n${err}`);
      res.status(500).json({ error: 'Error in synths Update route'});
    }
    res.json({ synth });
  });
});
// DELETE - DELETE /synths/:id
ROUTER.delete('/:id', (req, res) => {
  Synth.findByIdAndDelete(req.params.id, (err, synth) => {
    if (err) {
      console.error(`Error in synths Destroy route:\n${err}`);
      res.status(500).json({ error: 'Error in synths Destroy route'});
    }
    res.json({ deletedSynth: synth });
  });
});
module.exports = ROUTER;