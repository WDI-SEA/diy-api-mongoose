// PLUARALIZED MODEL NAME AND NTO UPPERCASE SENSITIVE
const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blogs - read all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
        
    }
})

// GET /blogs/:id - read single blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch (err) {
        console.log(err)
    }
})

// POST /blogs -- create blog
router.post('/', async (req, res) => {
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
router.put('/', async (req, res) => {
    try {
        const updateBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true })
        res.json(updateBlog)
    } catch (err) {
        console.log(err)
    }
})

// DELETE /blogs/:id delete a blog
router.delete('/', async (req, res) => {
    try {
        const deleteBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router