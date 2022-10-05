const express = require('express')
const router = express.Router()
const db = require('../models')


//show all blog posts
router.get('/', async (req,res) => {
    try {
        const allBlogs = await db.Blog.find({})
        res.json(allBlogs)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

//add a new blog post
router.post('/', async (req,res) => {
    try {
        const newPost = await db.Blog.create(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

//Show one blog post
router.get('/:id', async (req,res) => {
    try {
        const oneBlog = await db.Blog.findById(req.params.id)
        res.json(oneBlog)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

//update a blog post
router.put('/:id', async (req,res) => {
    try {
        const options = { new: true }
        const updateBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})

// delete one blog post
router.delete('/:id', async (req,res) => {
    try {
        await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'internal server error'})
    }
})
module.exports = router