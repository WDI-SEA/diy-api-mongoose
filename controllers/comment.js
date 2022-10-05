const express = require('express')
const router = express.Router()
const db = require('../models')
const { rawListeners } = require('../models/Recipe')

router.put('/:id', async (req, res) => {
    try {
        // const updateComment = await db.Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
        const oneComment = await db.Comment.findById(req.params.id)
        const oneRecipe = await db.Recipe.findById(oneComment.recipes.id)
        const foundComment = oneRecipe.comments.id(req.params.id)
        foundComment.content = req.body.content
        await oneRecipe.save()
        res.redirect(`/blog/${oneComment.recipes.id}`)

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        // const deleteComment = await db.Comment.findByIdAndDelete(req.params.id)
        const oneComment = await db.Comment.findById(req.params.id)
        const oneRecipe = await db.Recipe.findById(oneComment.recipes.id)
        const foundComment = oneRecipe.comments.id(req.params.id)
        foundComment.remove()
        await oneRecipe.save()
        res.redirect(`/blog/${oneComment.recipes.id}`)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

module.exports = router
