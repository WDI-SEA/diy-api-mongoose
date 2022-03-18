const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const Player = require('../models/player')

router.get('/', (req, res) => {
    Players.find({}, (err, player) => {
        if (err) {
            console.error(`🏈 Error in player index route:\n${err}`)
            return res.status(500).json({error: 'Error in player index route'})
        }
        res.json({ Players })
    })
})

router.get('/:id', (req, res) => {
    Players.findById(req.params.id, (err, Players) => {
        if (err) {
        console.error(`⚾️ Error in player Detail route:\n${err}`);
        return res.status(500).json({ error: 'Error in player Detail route' })
        }
        res.json({ Players })
    })
})


router.post('/', (req, res) => {
    Players.create(req.body, (err, Players) => {
        if (err) {
            console.error(`🔥 Error in player Create route:\n${err}`);
            return res.status(500).json({ error: 'Error in player Create route' });
        }
        res.json({ Players });
    })
})


router.delete('/:id', (req, res) => {
    Players.findByIdAndDelete(req.params.id, (err, Players) => {
        if (err) {
            console.error(`🔥 Error in player Delete route:\n${err}`);
            return res.status(500).json({ error: 'Error in player Delete route' });
        }
        res.json({ deletedPlayers: Players });
    })
})
