const express = require('express')
const db = require('../models')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const characters = await db.Character.find({})
        res.status(201).json({characters})
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.post('/', async (req, res) => {
    try {
        const newCharacter = await db.Character.create(req.body)
        res.status(201).json({newCharacter})
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.get('/:id', async (req,res) => {
    try {
        const editCharacter = await db.Character.findById(req.params.id)
        res.status(201).json({editCharacter}) 
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.put('/:id', async (req,res) => {
    try {
        const editCharacter = await db.Character.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(201).json({editCharacter}) 
        
        
    } catch(err) {
        console.warn(err)
        res.status(500).json({message: 'server error whoops.'})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        await db.Character.findByIdAndDelete(req.params.id)
        res.sendStatus(204)

    } catch(err) {
        console.warn(err)
        res.status(500).json({message: `${req.params.id} still lives.`})
    }
})


module.exports = router