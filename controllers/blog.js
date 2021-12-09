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
    db.Blog.findById(req.params.id)
    .then(foundPost => {
        res.json({foundPost})
    }).catch(err => {
        res.json({msg: `Error: ${err}`})
    })
})

//edit blog post 
router.put('/:id', (req, res) => {
    db.Blog.findOneAndUpdate({id: req.params.id}, req.body, {new: true})
    .then(updatedBlog => {
        res.json(updatedBlog)
    }).catch(err => {
        console.log('error')
        res.status(503).json({msg: 'Database Error: '})
    })
})

//delete blog post
router.delete('/:id', (req, res) => {
    db.Blog.findOneAndDelete({id: req.params.id})
    .then(deletResponse => {
        res.json({deletedDocument: deletResponse})
    }).catch(err => {
        console.log(err)
        res.status(503).json({msg: 'Database Error'})
    })
})

module.exports = router