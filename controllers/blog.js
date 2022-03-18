const db = require('../models')
const router = require('express').Router()

// GET /blog (index)
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// POST /blog (create)
router.post('/', async (req, res) => {
    try {
        const createdBlog = await db.Blog.create(req.body)
        res.status(201).json(createdBlog)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// GET /blog/:id (show)
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const { id } = req.params
        const foundBlog = await db.Blog.findById(id)
        if (!foundBlog) {
            return res.status(404).json({ message: 'blog not found' })
        } else {
            res.json(foundBlog)
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// PUT /blog/:id (update)
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {
            new: true
        }
        const updatedBlog = await db.Blog.findOneAndUpdate({
            _id: id
        },
        req.body,
        options
        )
        if (!updatedBlog) {
            return res.status(404).json({ message: 'that id is incorrect' })
        } else {
            res.json(updatedBlog)
        }
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// DELETE /blog/:id (delete)
router.delete('/:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: 'it worked! blog has been deleted' })
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

// POST /blog/:id/comment (create)
router.post('/:id/comment', async (req, res) => {
    try {
        const id = req.params.id
        const comment = req.body.content
        const foundBlog = await db.Blog.findById(id)
        foundBlog.comments.push({
            content: comment
        })
        await foundBlog.save()
        res.status(201).json(foundBlog)
    } catch (error) {
        console.log(error)
        res.status(503).json({ message: 'database or server room is on fire' })
    }
})

module.exports = router