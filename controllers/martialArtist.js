const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /martialartist -- return array of all martial artists
router.get('/', async (req, res) => {
    try {
        // find all martial artists
        const martialArtists = await db.MartialArtist.find({})
        // send them back as json (with default status code 200)
        res.json(martialArtists)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' })          
    }
})

module.exports = router