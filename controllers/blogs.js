const express = require('express')
const db = require('../models')

const router = express.Router()

// GET /blogs

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

// PUT /blogs/:id

// DELETE /blogs/:id


module.exports = router