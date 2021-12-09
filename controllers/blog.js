const router = require('express').Router()
const db = require('../models')

//index
router.get('/', (req, res) => {
    db.Blog.find({})
    .then(foundCollection => {
        res.json({foundCollection})
    })
})

//make a new blog post
router.post('/', (req, res) => {
    console.log(req.body.title)
    db.Blog.create(req.body)
    .then(createdBlog => {
        res.status(200).json(createdBlog)
    }).catch(err => {
        if (err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation Error: ', err})
        } else {
            res.status(503).json({message: 'Database or Server Error'})
        }
    })
})

//show one blog post 
router.get('/:id', (req, res) => {
    res.json({msg: `showing post ${req.params.id}`})
})

//edit blog post 
router.put('/:id', (req, res) => {
    res.json({msg: `route to edit post ${req.params.id}`})
})

//delete blog post
router.delete('/:id', (req, res) => {
    res.json({msg: `route for deleting post ${req.params.id} `})
})

module.exports = router