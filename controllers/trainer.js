const express = require('express')
const router = express.Router()
const db = require('../models')
// READ all trainers
router.get('/', async(req, res)=>{
    try{
        const trainer = await db.Trainer.find({})
        res.json(trainer)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// CREATE a new trainer
router.post('/', async(req, res)=>{
    try{
        const newTrainer = await db.Trainer.create(req.body)
        res.status(newTrainer)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// READ a specific trainer
router.get('/:id', async(req, res)=>{
    try{
        const trainer = await db.Trainer.findById(req.params.id)
        res.json(trainer) 
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// UPDATE update a specific trainer
router.put('/:id', async(req, res)=>{
    try{
        const options = {new: true}
        const updatedTrainer = await db.Trainer.findByIdAndUpdate(req.params.id, req.body, options)
        req.json(updatedTrainer)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// DESTROY delete a specific trainer
router.delete('/:id', async(req, res)=>{
    try{
        await db.Trainer.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

module.exports = router