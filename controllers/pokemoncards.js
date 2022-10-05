const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /pokemoncards
    router.get('/', async (req,res)=> {
        try{
            const allPokemonCards = await db.PokemonCard.find({})
            res.json(allPokemonCards)
        }catch(err){
            console.log(err)
            res.status(500).json({ message: 'Internal server error'})
        }
    })
// GET /pokemoncards/:id
router.get('/:id', async (req,res)=> {
    try{
        const pokemonCard = await db.PokemonCard.findById(req.params.id)
        res.json(pokemonCard)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
})
// POST /pokemoncards
router.post('/', async (req,res)=> {
    try{
        const newPokemonCard = await db.PokemonCard.create(req.body)
        res.status(201).json(newPokemonCard)

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
})

// POST /pokemoncards/:id/comment
router.post('/:id/comment', async (req,res)=> {
    try{

        const newComment = await db.Comment.create({
            header: req.body.header,
            content: req.body.content
        })
        const foundPokemonCard = await db.PokemonCard.findById(req.params.id)

        newComment.pokemoncards.push(foundPokemonCard)
        
        foundPokemonCard.comments = newComment
        await newComment.save()
        await foundPokemonCard.save()
        res.status(201).json(foundPokemonCard)

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
    
})



// PUT /pokemoncards/:id
router.put('/:id', async (req,res)=> {
    try{
        const options = { new : true }
        const updatedPokemonCard = await db.PokemonCard.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedPokemonCard)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
})

// DELETE /pokemoncards/:id

router.delete('/:id', async (req,res)=> {
    try{
        await db.PokemonCard.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'Internal server error'})
    }
})

module.exports = router