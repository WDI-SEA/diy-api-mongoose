const express = require('express')
const router = express.Router()
const db = require('../models')



//! This route will find all random movies
router.get('/', async (req,res) => {
    try{
        const movies = await db.Movie.find({})
        res.json(movies)

    }catch(err){
        console.warn(err)
    }
})


//! This route will find a specific movie by id
router.get('/:id', async (req,res) => {
    try{
        const movie = await db.Movie.findById(req.params.id)
        res.json(movie)

    }catch(err){
        console.warn(err)
    }
})


//! Create a new movie with user input
router.post('/', async (req,res) => {
    try{
        const newMovie = await db.Movie.create(req.body)
    }catch(err){
        console.warn(err)
    }
})


//! change / update a movie
router.put('/:id', async (req,res) => {
    try{
        const options = {new: true} //* cleaner look, but not needed.
        const updatedMovie = await db.Movie.findById(req.params.id, options)
        res.json(updatedMovie)
    }catch(err){
        console.warn(err)
    }
})


//! Delete a movie 
router.delete('/:id', async (req,res) => {
    try{
        await db.Movie.findByIdAndDelete(req.params.id)

    }catch(err){
        console.warn(err)
    }
})

module.exports = router