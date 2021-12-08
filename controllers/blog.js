const router = require('express').Router()
const db = require('../models')


// index
router.get('/', (req, res) => {
    db.Blog.find()
        .then(foundBlogs => {
            res.status(200).json(foundBlogs)
        })
        .catch(err => {
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// post a new blog
router.post('/', (req, res) => {
    db.Blog.create(req.body)
        .then(createdBlog => {
            res.status(200).json(createdBlog)
        })
        .catch(err => {
            console.log('error while creating', err)
            if (err.name === 'ValidationError') {
                res.status(406).json({ message: 'Validation Error' })
            } else {
                res.status(503).json({ message: 'Database or server error!' })
            }
        })
})

// edit a single blog
router.put('/:id', (req, res) => {
    db.Blog.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true })
        .then(updatedBlog => {
            res.json(updatedBlog)
        })
        .catch(err => {
            res.status(503).json({ message: 'server error' })
        })
})

// get info on one blog
router.get('/:id', (req, res) => {
    db.Blog.findOne(
        { _id: req.params.id }
    )
        .then(foundBlogs => {
            res.status(200).json(foundBlogs)
        })
        .catch(err => {
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// delete a blog
router.delete('/:id', (req, res) => {
    db.Blog.deleteOne(
        { _id: req.params.id }
        )
        .then(foundBlogs => {
            res.status(200).json(foundBlogs)
        })
        .catch(err => {
            res.status(503).json({ message: 'Database asleep?' })
        })
})

module.exports = router