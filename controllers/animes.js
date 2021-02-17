const express = require('express');
const router = express.Router();
const Anime = require('../models/anime');

// Index - GET /Animes
router.get('/', (req, res) => {
  Anime.find({}, (err, animes) => {
    if (err) {
      console.error(`🔥 Error in Animes Index route:\n${err}`);
      return res.status(500).json({ error: 'Error in Animes Index route' });
    }
    res.json({ animes });
  });
});

// Detail — GET /Animes/:id
router.get('/:id', (req, res) => {
  Anime.findById(req.params.id, (err, anime) => {
    if (err) {
      console.error(`🔥 Error in Animes Detail route:\n${err}`);
      return res.status(500).json({ error: 'Error in Animes Detail route' });
    }
    console.log(anime.name);
    res.json({ anime });
  });
});

// Create — POST /Animes
router.post('/', (req, res) => {
  console.log(req.body);
  Anime.create(req.body, (err, anime) => {
    if (err) {
      console.error(`🔥 Error in Animes Create route:\n${err}`);
      return res.status(500).json({ error: 'Error in Animes Create route' });
    }
    
    res.json({ anime });
  });
});

// Update — PUT /Animes/:id
router.put('/:id', (req, res) => {
  // Anime.update({}, {meta: { website: 'www.google.com' }}, (err, Anime) => {}) // multiple Animes
  // Anime.findOneAndUpdate()
  Anime.findByIdAndUpdate(
    req.params.id, 
    req.body, 
    { new: true },
    (err, Anime) => {
      if (err) {
        console.error(`🔥 Error in Animes Update route:\n${err}`);
        return res.status(500).json({ error: 'Error in Animes Update route' });
      }
      res.json({ Anime });
    });
});

// Delete — DELETE to /Animes/:id
router.delete('/:id', (req, res) => {
  Anime.findByIdAndDelete(req.params.id, (err, Anime) => {
    if (err) {
      console.error(`🔥 Error in Animes Delete route:\n${err}`);
      return res.status(500).json({ error: 'Error in Animes Delete route' });
    }
    res.json({ deletedAnime: Anime });
  })
})

module.exports = router;