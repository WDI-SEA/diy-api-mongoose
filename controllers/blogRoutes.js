const router = require('express').Router()
const db = require('../models')

// (index) - verified via postman
router.get('/', (req, res) => {
    db.Blog.find()
    .then(foundBlogs => {
        res.status(200).json(foundBlogs)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Database asleep?'})
    })
})

// show just one blog - verified via postman
router.get('/:id', (req, res) => {
    db.Blog.findById(req.params.id)
    .then(foundBlog => {
        res.status(200).json(foundBlog)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Server Error'})
    })})

// post a new blog (create) - verified via postman
router.post('/', (req,res) => {
    db.Blog.create(req.body)
    .then(createdBlog => {
        res.status(200).json(createdBlog)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if (err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation error'})
        } else {
            res.status(503).json({messsage: 'Database or server error'})
        }
    })
})
// (update) - verified via postman
router.put('/:id', (req,res) => {
    db.Blog.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(updatedBlog => {
        res.json(updatedBlog)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Server Error'})
    })})

module.exports = router