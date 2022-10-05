const express = require('express')
const db = require('../models')

const router = express.Router()

// GET /blogs
router.get('/', async (req, res) => {
    try {
        const allBlogs = await db.Blog.find({})
        res.json(allBlogs)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// POST /blogs
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }

})

// GET /blogs/:id
router.get('/:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.id)
        res.json(foundBlog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// PUT /blogs/:id
router.put('/:id', async (req, res) => {
    try {
        const options= {
            new: true
        }
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedBlog)
    } catch(error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// DELETE /blogs/:id
router.delete('/:id', async (req, res) => {
    try {
        await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// POST /blogs/:id/comments
router.post('/:id/comments', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.id)
        foundBlog.comments.push(req.body)
        await foundBlog.save()
        res.status(201).json(foundBlog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// PUT /blogs/:id/comments/:cId
router.put('/:id/comments/:cId', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.id)
        const comment = foundBlog.comments.id(req.params.cId)
        comment.content = req.body.content
        await foundBlog.save()
        res.json(foundBlog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

// DELETE /blogs/:id/comments/:cId
router.delete('/:id/comments/:cId', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.id)
        foundBlog.comments.id(req.params.cId).remove()
        await foundBlog.save()
        res.sendStatus(204)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = router