const db = require('../models')
const router = require('express').Router()

//get index
router.get('/', async (req, res) => {
    try {
        //find all pokemons
        const allPokemons = await db.Pokemon.find({})
        // response 
        res.json(allPokemons)

    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

//post create
router.post('/', async (req, res) => {
    try {
        const newPokemon = await db.Pokemon.create(req.body)
        res.status(201).json(newPokemon)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})
//create ability
router.put('/:id/ability', async (req, res) => {
    try {
        const foundPokemon = await db.Pokemon.findById(req.params.id)
        await foundPokemon.abilities.push(req.body)
        await foundPokemon.save()
        res.json(foundPokemon)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

//get detail
router.get('/:id', async (req, res) => {
    try {
        const pokemon = await db.Pokemon.findById(req.params.id)
        if (!pokemon) return res.status(404).json({ message: 'pokemon not found' })
        res.json(pokemon)

    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

//put update
router.put('/:id', async (req, res) => {
    try {
        const options = { new: true }

        //find the pokemon in the db and update it
        const updatePokemon = await db.Pokemon.findOneAndUpdate({
            _id: req.params.id
        },
            req.body,
            options
        )
        if (!updatePokemon) return res.status(404).json({ message: 'incorrect id' })
        res.json(updatePokemon)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

//delete delete
router.delete('/:id', async (req, res) => {
    try {
        await db.Pokemon.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: 'where is the pokemon?? ❔❔❔' })
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

//delete ability
router.get('/:pokemonId/ability/:id', async (req, res) => {
    try {
        const foundPokemon = await db.Pokemon.findById(req.params.pokemonId)
        const foundAbility = await foundPokemon.abilities[req.params.id]
        foundAbility.remove()
        foundPokemon.save()
        res.json(foundPokemon)
        // res.status(204).json({ message: 'where is the ability?? ❔❔❔' })
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'oops something went wrong' })
    }
})

module.exports = router