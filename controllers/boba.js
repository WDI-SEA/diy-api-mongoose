const express = require('express')
const router = express.Router()
const db = require('../models')

//GET /boba -- return array of all the boba drinks
router.get('/', async (req, res) => {
    try {
        const bobas = await db.Boba.find({})
        res.json(bobas)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error '})
    }
})


//GET /boba/:id -- return a single boba drink
router.get('/:id', async (req, res) => {
    try{
        const boba = await db.Boba.findById(req.params.id)
        res.json(boba)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error '})
    }
})



//POST /boba -- create a new boba drink in the db
router.post('/', async (req, res) => {
    try {
        const newBoba = await db.Boba.create(req.body)
        res.status(201).json(newBoba)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error '})
    }
})


// PUT /boba/:id -- update a single boba drink
router.put('/:id', async (req, res) => {
    try{
        const options = { new: true }
        const updatedBoba = await db.Boba.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedBoba)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error '})
    }
})


//DELETE /boba/:id -- destroy a boba drink
router.delete('/:id', async (req, res) => {
    try{ 
        await db.Boba.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error '})
    }
})


module.exports = router