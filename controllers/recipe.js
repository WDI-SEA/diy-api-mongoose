const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /recipe -- return array of all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await db.Recipe.find({})
        res.json(recipes)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// GET /recipe/:id -- return a specific recipe w/ comments
router.get('/:id', async (req, res) => {
    try {
        const oneRecipe = await db.Recipe.findById(req.params.id)
        const allComments = oneRecipe.comments
        res.json(oneRecipe)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// POST /recipe -- create a new recipe
router.post('/', async (req, res) => {
    try {
        const newRecipe = await db.Recipe.create(req.body)
        res.status(201).json(newRecipe)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// POST /recipe/:id/comment -- post a new comment on a recipe
router.post('/:id/comment', async (req, res) => {
    try {
        const oneRecipe = await db.Recipe.findById(req.params.id)
        const newComment = await db.Comment.create({
            content: req.body.content
        })

        newComment.recipes.push(oneRecipe)
        oneRecipe.comments = newComment
        
        await newComment.save()
        await oneRecipe.save()

        res.json(oneRecipe)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// PUT /recipe/:id -- update a specific recipe
router.put('/:id', async (req, res) => {
    try {
        const options = { new: true }
        const updateRecipe = await db.Recipe.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updateRecipe)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// DELETE /recipe/:id -- destroy a recipe
router.delete('/:id', async (req, res) => {
    try {
        await db.Recipe.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})


module.exports = router