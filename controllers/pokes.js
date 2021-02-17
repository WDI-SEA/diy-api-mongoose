const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
    Pokemon.find({}, (err, pokemon) => {
        if (err) {
            console.error(`🔥 Error in pokemon Index route:\n${err}`);
            res.status(500).json({ error: 'Error in pokemon Index route'});
        }
        res.json({ pokemon });
    });
});

router.get('/:id', (req, res) => {
    Pokemon.findById(req.params.id, (err, pokemon) => {
        if (err) {
            console.error(`🔥 Error in pokemon Detail route:\n${err}`);
            res.status(500).json({ error: 'Error in pokemon Detail route'});
        }
        res.json({ pokemon });
    });
});

router.post('/', (req, res) => {
    Pokemon.create(req.body, (err, pokemon) => {
        if (err) {
            console.error(`🔥 Error in pokemon Create route:\n${err}`);
            res.status(500).json({ error: 'Error in pokemon Create route'});
        }
        res.json({ pokemon });
    } )
})

router.put('/:id', (req, res) => {
    Pokemon.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        { new: true },
        (err, pokemon) => {
            if (err) {
                console.error(`🔥 Error in pokemon Update route:\n${err}`);
                res.status(500).json({ error: 'Error in pokemon Update route'});
            }
            res.json({ pokemon });
        });
});

router.delete('/:id', (req, res) => {
    Pokemon.findByIdAndDelete(req.params.id, (err, pokemon) => {
        if (err) {
            console.error(`🔥 Error in pokemon Delete route:\n${err}`);
            res.status(500).json({ error: 'Error in pokemon Delete route'});
        }
        res.json({ deletedPokemon: pokemon });
    });
});

module.exports = router;