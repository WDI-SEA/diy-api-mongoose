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

// GET /martialartist/:id -- return a single martial artist
router.get('/:id', async (req, res) => {
    try {
        // get specific id from the req.params.id
        // look up that id in the database
        const martialArtist = await db.MartialArtist.findById(req.params.id)
        // send the found martial artist back as json
        res.json(martialArtist)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' }) 
    }
})

// POST /martialartist -- create a new martial artist in the db
router.post('/', async (req, res) => {
    try {
        const newMartialArtist = await db.MartialArtist.create(req.body)
        res.status(201).json(newMartialArtist)
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' }) 
    }
})

// PUT /martialartist/:id -- update a single martial artist
router.put('/:id', async (req, res) => {
    try {
        // getting the id from the url route parameters
        // getting the ddata to update from the request body
        // ensuring that the query returns the new values with the options object
        const options = { new: true }
        const updatedMartialArtist = await db.MartialArtist.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedMartialArtist)        
    } catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error' })         
    }
})

module.exports = router