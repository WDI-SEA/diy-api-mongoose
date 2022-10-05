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

// DELETE /blogs/:id


module.exports = router