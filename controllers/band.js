const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/', async (req, res) => {
    try {
        // list all bands
        const bands = await db.Band.find({})
        res.json(bands)
    } catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        // add a new band
        const newBand = db.Band.create(req.body)
        res.status(201).json(newBand)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        // list one band's details
        const band = await db.Band.findById(req.params.id)
        res.json(band)
    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        // update one band
        res.json({message: "test"})
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        // delete one band
        res.json({message: "test"})
    } catch(err) {
        console.log(err)
    }
})


module.exports = router