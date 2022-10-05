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

module.exports = router