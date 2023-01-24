const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blogs - read all blogs
router.get('/', async (req, res) => {
    res.json({ msg: 'show all blogs'})
})

// GET /blogs/:id - read single blog
router.get('/:id', async (req, res) => {
    res.json({ msg: 'show blogs with id: ' + req.params.id})
})

// POST /blogs -- create blog
router.get('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.json(newBlog)
    } catch (err) {
        console.log(err)
        if (err.name === "ValidatorError") {
            res.status(400).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'The server is burning'})
        }
        res.json(err)
    }
})

// PUT /blogs/:id -- update blog
router.get('/', async (req, res) => {
    res.json({ msg: 'update blog with id: ' + req.params.id})
})

// DELETE /blogs/:id delete a blog
router.get('/', async (req, res) => {
    res.json({ msg: 'deleted blog' + req.params.id})
})

module.exports = router