const db = require('../models')
// const express = require('express')
// const router = express.Router()
// these two steps combined to become
const router = require('express').Router()

// GET
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// POST
router.post('/', async (req, res) => {
    try {
        const createdBlog = await db.Blog.create(req.body)
        res.status(201).json(createdBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// GET
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const foundBlog = await db.Blog.findById(id)
        if (!foundBlog) {
            return res.status(404).json({ message: 'blog not found 😢'})
        } else {
            res.json(foundBlog)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// PUT
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            new: true
        }
        const updatedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        }, req.body, options)
        if (!updatedBlog) {
            return res.status(404).json({ message: 'incorrect id'})
        } else {
            res.json(updatedBlog)
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: "Blog Deleted"})
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})

// POST
router.post('/:id/comment', async (req, res) => {
    try {
        const id = req.params.id
        const comment = req.body.content
        console.log(comment)
        const foundBlog = await db.Blog.findById(id)
        foundBlog.comments.push({
            content: comment
        })
        await foundBlog.save()
        res.status(201).json(foundBlog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: 'Database or Server Error'})
    }
})


module.exports = router