const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog -- READ all blogs
router.get('/', (req, res) => {
    db.Blog.find({})
        .then(blogs => res.json(blogs))
        .catch(console.log)
})

//POST /blog -- CREATE blog
router.post('/', (req, res) => {
    db.Blog.create(req.body)
        .then(newBlog => {
            res.json(newBlog)
        })
        .catch(console.log)
})

// GET /blog/:id -- READ as single Blog with :id
router.get('/:id', (req, res) => {
    db.Blog.findById(req.params.id)
        .then(foundBlog => {
            if (!foundBlog) return res.status(404).json({ msg: 'Not found'})
            res.json(foundBlog)
        })
            .catch(err => {
                if (err.name === 'ValError') return res.status(404).json({ msg: 'Can not find because id was not constructed correct'})
                
            })
})

// PUT /blog/:id -- Update a single blog @ id
router.put('/:id', (req, res) => {
    db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updateBlog => res.json(updateBlog))
        .catch(err => {
            console.log(err)
            res.status(503).json({ msg: 'Cannot Compute' })
        })
})

// DELETE /blog/:id  -- DESTROY a blog at :id
router.delete('/:id', (req, res) => {
    db.Blog.findByIdAndDelete(req.params.id)
    .then(() => res.status(204))
    .catch(err => {
        console.log(err)
        res.status(503).json({ msg: 'error'})
    })
})

router.post("/:id/comment", async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        blog.comments.push(req.body)
        await blog.save()
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.status(503).json({ msg: 'error'})
    }
})

module.exports = router