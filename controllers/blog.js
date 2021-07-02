const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog - return all posts
router.get('/', async (req,res) => {
    try {
        const posts = await db.Post.find({})
        res.send(posts)
    } catch(err) {
        console.log(err)
    }
})

// POST /blog - create a new post
router.post('/', async (req,res) => {
    try {
        await db.Post.create({
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        })
        res.redirect('/blog')
    } catch(err) {
        console.log(err)
    }
})

// GET /blog/:id - get one post
router.get('/:id', async (req,res) => {
    try {
        const post = await db.Post.findById(req.params.id)
        res.json({ post })
    } catch(err) {
        console.log(err)
    }
})

// PUT /blog/:id - update one post
router.put('/:id', async (req,res) => {
    try {
        const post = await db.Post.findById(req.params.id)
        post.author = req.body.author
        post.title = req.body.title
        post.content = req.body.content
        await post.save()
        res.redirect(`/blog/${req.params.id}`)
    } catch(err) {
        console.log(err)
    }
})

// DELETE /blog/:id - delete one post
router.delete('/:id', async (req,res) => {
    try {
        await db.Post.findByIdAndDelete(req.params.id)
        res.redirect('/blog')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router