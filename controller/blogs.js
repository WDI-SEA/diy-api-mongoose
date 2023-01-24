// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')

// mount our routes on the router

// GET /blogs -- respond with all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        if (!blogs) {
            res.status(404).json({ msg: 'not found'})
        }
        res.json(blogs)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectID") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json( {msg: 'Interval Server Error, Contact the System Administrator'} )
        }
    }
})

// GET /blogs/:id show one blog post
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})

// POST /blogs add a new blog post
router.post('/', async (req, res) => {
    try {
        const blog = await db.Blog.create(req.body)
        res.status(201).json(blog)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
}) 

// PUT /blogs/:id update one blog post
router.put('/:id', async (req, res) => {
    try {
        const updateBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updateBlog)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Adminstrator' })
    }
})

// DELETE /blogs/:id delete on blog post 
router.delete('/:id', async (req, res) => {
    try {
        const deleteBlog = await db.Blog.findByIdAndDelete(req.params.id)
        if (!deleteBlog) {
            res.status(404).json({ msg: 'not found' })
            return
        }
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectID") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})

// export the router
module.exports = router