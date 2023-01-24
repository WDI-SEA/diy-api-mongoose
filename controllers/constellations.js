const express = require('express');
const router = express.Router()
const db = require('../models')

// GET /constellations - respond w/ all constellation
router.get('/', async (req,res) => {
    try {
        const allConstellations = await db.Constellation.find({})
        res.json({message: "test GET all route"})
        // res.json(allConstellations)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Sad, something went wrong!' })
    }
})

// GET /constellations/:id - respond with details of a specific constellation @ id
router.get('/:id', async (rew,res) => {
    try {
        const specificConstellation = await db.Constellation.findById(req.params.id)
        if (!specificConstellation) {
            res.status(404).json({ message: 'Sad, constellation not found' })
            return
        }
        res.json({message: "test GET specific route"})
        // res.json(specificConstellation)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({msg: err.message})
        } else {
        res.status(500).json({msg: 'Internal Server Error, Contact the System Administrator'})
    }}
})

// POST /constellations - create a new constellation
router.post('/', async (req,res) => {
    try {
        const newConstellation = await db.Constellation.create(req.body)
        res.json({message: "test POST route"})
        // res.json(newConstellation)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Internal Server Error, Contact the System Administrator'})
    }
})

// PUT /constellations/:id - update a specific constellation @ id
router.put('/:id', async (req,res) => {
    try {
        const updatedConstellation = await db.Constellation.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message: "test PUT route"})
        // res.json(updatedConstellation)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({msg: err.message})
        } else {
        res.status(500).json({msg: 'Internal Server Error, Contact the System Administrator'})
    }}

})

// DELETE /constellations/:id - delete a specific constellation @ id
router.delete('/:id', async (req,res) => {
    try {
        const deletedConstellation = await db.Constellation.findByIdAndDelete(req.params.id)
        if (!deletedConstellation) {
            res.status(404).json({ message: 'Sad, constellation not found' })
        }
        res.json({message: "test DELETE route"})
        // res.sendStatus(204)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({msg: err.message})
        } else {
        res.status(500).json({msg: 'Internal Server Error, Contact the System Administrator'})
        }
    }
})

module.exports = router

