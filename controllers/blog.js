const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog -- list all blog posts
router.get('/', async (req, res) => {
    try {
        // find all blogs
        const allBlogs = await db.Blog.find({})
        // send them back as json
        res.json(allBlogs)
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })
    }
})

// POST /blog -- add a new blog post
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })

    }
})

// GET /blog/:id -- show one blog post
router.get('/:id', async (req, res) => {
    try {
        // look up id in the database
        const blog = await db.Blog.findById(req.params.id)
        // send the found blog back as json
        res.json(blog)
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })

    }
})

// PUT /blog/:id -- update one blog post
router.put('/:id', async (req, res) => {
    try {
        res.json({ message: 'the PUT route works'})
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })

    }
})

// DELETE /blog/:id -- delete one blog post
router.delete('/:id', async (req, res) => {
    try {
        res.json({ message: 'the DELETE route works'})
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })

    }
})

module.exports = router