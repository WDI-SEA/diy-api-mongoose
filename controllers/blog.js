const router = require('express').Router()
const db = require('../models')

// INDEX
router.get('/', (req, res) => {
    db.Blog.find()
        .then(foundBlogs => {
            res.status(200).json(foundBlogs)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Database asleep?' })
        })
})

// POST a new blog
router.post('/', (req, res) => {
    db.Blog.create(req.body)
        .then(createdBlog => {
            res.status(200).json(createdBlog)
        })
        .catch(err => {
            console.log('Error while creating', err)
            if (err.name === 'ValidationError') {
                res.status(406).json({ message: 'Validation Error' })
            } else {
                res.status(503).json({ message: 'Database or server error!' })
            }
        })
})

// EDIT a single blog
router.put('/:id', (req, res) => {
    db.Blog.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true })
        .then(updatedBlog => {
            res.json(updatedBlog)
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: 'Server Error' })
        })
})


module.exports = router