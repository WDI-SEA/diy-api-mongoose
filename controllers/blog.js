const router = require('express').Router()
const db = require('../models')

// index (GET)
router.get('/', (req, res) => {
    db.Blog.find()
    .then(foundBlogPosts =>{
        res.status(200).json(foundBlogPosts)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Database asleep?'})
    })
})

// create (POST)
router.post('/', (req,res) => {
    db.Blog.create(req.body)
    .then(createdPosts => {
        res.status(200).json(createdPosts)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message:'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or Server Error'})
        }
    })
})

// show (GET)
router.get('/:id', (req,res) => {
    db.Blog.findOne(req.params)
    .then(foundPost => {
        res.status(200).json(foundPost)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Database asleep?'})
    })
})

// edit (PUT)
router.put('/:id', (req,res) => {
    db.Blog.findOneAndUpdate({
        _id: req.params.id
    },
    req.body,
    {new:true})
    .then(updatedPost => {
        res.json(updatedPost)
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({message: 'Database or Server Error'})
    })
})

module.exports = router