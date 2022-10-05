const express = require('express')
const router = express.Router()
const db = require('../models')
// READ all pokemon
router.get('/', async(req, res)=>{
    try{
        const pokemon = await db.Pokemon.find({})
        res.json(pokemon)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// CREATE a new pokemon
router.post('/', async(req, res)=>{
    try{
        const newPokemon = await db.Pokemon.create(req.body)
        res.status(newPokemon)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// READ a specific pokemon
router.get('/:id', async(req, res)=>{
    try{
        const pokemon = await db.Pokemon.findById(req.params.id)
        res.json(pokemon) 
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// UPDATE update a specific pokemon
router.put('/:id', async(req, res)=>{
    try{
        const options = {new: true}
        const updatedPokemon = await db.Pokemon.findByIdAndUpdate(req.params.id, req.body, options)
        req.json(updatedPokemon)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// DESTROY delete a specific pokemon
router.delete('/:id', async(req, res)=>{
    try{
        await db.Pokemon.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

module.exports = router