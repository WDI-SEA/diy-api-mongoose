const express = require('express')
const router = express.Router()
const db = require('../../models')

// configure middlewares
router.use(express.urlencoded({ extended: false }))
router.use(express.json())

// GET /blog -- READ list all blog posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await db.Post.find()
        res.json({ allPosts })
    } catch (err) {
        console.log(err)
    }
})

// POST /blog -- CREATE add a new blog post, redirect to /blog
router.post('/', async (req, res) => {
    try {
        await db.Post.create({
            author: req.body.author,
            title: req.body.title,
            content: req.body.content,
            tags: req.body.tags
        })
        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

// GET /blog/:id -- READ show one blog post
router.get('/:id', async (req, res) => {
    try {
        const foundPost = await db.Post.find({
            _id: req.params.id
        })
        res.json({ foundPost })
    } catch (err) {
        console.log(err)
    }
})

// PUT /blog/:id -- UPDATE one blog post, and redirect to /blog
router.put('/:id', async (req, res) => {
    console.log(req.body)
    try {
        const postToUpdate = await db.Post.findById(req.params.id)
        postToUpdate.content = req.body.content
        postToUpdate.title = req.body.title
        await postToUpdate.save()

        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

// DELETE /blog/:id -- DESTROY one blog post, and redirect to /blog
router.delete('/:id', async (req, res) => {
    try {
        await db.Post.findByIdAndDelete(req.params.id)

        res.redirect('/blog')
    } catch (err) {
        console.log(err)
    }
})

module.exports = router