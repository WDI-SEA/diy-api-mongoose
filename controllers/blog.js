const mongoose = require('mongoose')
const router = express.Router()
const db = require('../models')

// GET /blog - list of all blog post
router.get('/', async (req, res) => {
    try {
        // find all bounties
        const blogs = await db.Blog.find({})
        // send them back as json (w/default status code 200)
        res.json(blogs)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// POST /blog - add a new blog post
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// GET /blog/:id - show one blog post
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// PUT /blog/:id - update on blog psot
router.put('/:id', async (req, res) => {
    try {
        const options = { new: true }
        const updateBlog = await db.Bloge.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedBounty)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})
// DELETE /blog/:id - delete one blog post
router.delete('/:id', async (req, res) => {
    try {
        await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})