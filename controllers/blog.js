const router = require('express').Router()
const db=require('../models')


router.get('/', async (req,res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})

router.post('/', async (req,res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch (err) {
        console.log(err)
        if (err.name==="ValidationError") {
            res.status(400).json({msg:err.message})
        } else {
            res.status(500).json({msg: 'server error'})
        }
    }
})

router.get('/:id', async (req,res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})

router.put('/:id', async (req,res) => {
    try {
        // get id from the url params
        // search for the id in the db and update using the req.body
        const id = req.params.id
        const options = { new: true }
        const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, options)
        res.json(updatedBlog)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id
        await db.Blog.findByIdAndDelete(id)
        res.sendStatus(204) // was successful 
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'server error'})
    }
})

router.get('/:id/comments', async (req,res) => {
    const blog = await db.Blog.findById(req.params.id)
    res.json(blog.comments)
})

router.post('/:id/comments', async (req,res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        const newComment = req.body
        console.log(blog)
        blog.comments.push(newComment)
        await blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        if (err.name==="ValidationError") {
            res.status(400).json({msg:err.message})
        } else {
            res.status(500).json({msg: 'server error'})
        }
    }
})








module.exports = router