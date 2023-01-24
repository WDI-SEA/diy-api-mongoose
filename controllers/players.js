const express = require('express')
const router = express.Router()
const db = require('../models')


// mount our route on our router

// GET /player -- respond with all players
router.get('/', async (req, res) => {
    try {
        // find all bounties 
        const players = await db.Futbol.find({})
        // send players back, status 200 express default
        res.json(players)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'internal error, contact your system'})
    }
})

// GET /players/:id -- respond with the details of a specific player @ id
router.get('/:id', async (req, res) => {
    try {
        // look up a player using id from the request parameters
        const player = await db.Futbol.findById(req.params.id)
        // if the player is not found, respond with 404
        // respond with the player we found
        res.json(player)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'internal error, contact your system'})
    }
})

// POST /players -- accept a payload of data from the request body and use it to make a new player
router.post('/', async (req, res) => {
    try {
        // add a new player to the db, based on the req.body
        const player = await db.Futbol.create(req.body)
        // either redirect to where the client can find the new player or send back the new player
        res.json(player)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'internal error, contact your system'})
    }
})

// PUT /players/:id -- accept a payload of data from the request body and use it to update a player @ id 
router.put('/:id', async (req, res) => {
    try {
        // get the id from the url
        // get the data to update in from the req.body
        const updatePlayer = await db.Futbol.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatePlayer) {
            res.status(404).json({msg: 'not found'})
        }
        // send the updated body
        res.json(updatePlayer)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'internal error, contact your system'})
    }
})


// DELETE /players/:id -- delete a player @ id 
router.delete('/:id', async (req, res) => {
    try {
        const deletedPlayer = await db.Futbol.findByIdAndDelete(req.params.id)
        if(!deletedPlayer) {
            res.status(404).json({msg: 'not found'})
            return // dont want to send headers twice, stop the function
        }
        // send a status of 204(no content) and nothing else
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'internal error, contact your system'})
    }
})

// export our router
module.exports = router