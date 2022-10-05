const express = require('express')
const router = express.Router()
const db = require('../models')
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find()
        res.json(blogs)
    } catch(err) {
        console.log(err)
    }
})

router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.json(newBlog)
    } catch(err) {
        console.log(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch(err) {
        console.log(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(updatedBlog)
    } catch(err) {
        console.log(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removedBlog = db.Blog.findByIdAndRemove(req.params.id)
        res.json(removedBlog)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router