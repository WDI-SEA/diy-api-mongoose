const express = require('express')
const db = require('../models')
const router = express.Router()

//GET /bounty -- return array of all bounties
router.get('/', async (req, res) => {
    try {
        //find all bounties
        const inventors = await db.Inventor.find({})
        //send then back as json(w/ default status code 200)
        res.json(inventors)
    } catch(err){
        console.log(err)
        res.status(500).json({message: 'internal server error'})
    }
})

//GET /bounty/:id -- return a single bounty
router.get('/:id', async (req, res) => {
    try {
        //get a specific id from req.params id
        // look uo that id in the db
        const inventor = await db.Inventor.findById(req.params.id)
        //send the found bounty back as json
        res.json(inventor)
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'internal server error'})
    }
})

// POST /bounty -- create a new bounty in db
router.post('/', async (req, res) => {
    try {
        const newInventor = await db.Inventor.create(req.body)
        res.status(201).json(newInventor)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// PUT /bounty/:id -- update a single bounty 
router.put('/:id', async (req, res) => {
    try {
        // getting the id from the url route parameters
        // getting the data to update from the request body
        // ensuring that the query returns the new values with the options object
        const options = { new: true }
        const updatedInventor = await db.Inventor.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedInventor)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// DELETE /bounty/:id -- destroy a bounty
router.delete('/:id', async (req, res) => {
    try {
        //get id from route params
        // delete object with that id
        await db.Inventor.findByIdAndDelete(req.params.id)
        // status 204 -- no content (we cannot send and json data back with this status)
        //you could also send the deleted item back or you could redirect to get bounty 
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

module.exports = router