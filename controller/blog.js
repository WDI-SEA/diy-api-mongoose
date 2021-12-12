const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {

    db.Blog.find()
    .then(blogs => {
        res.status(200).json(blogs)
    })
})

router.post('/', (req, res) => {
    db.Blog.create(req.body)
    .then(createdBlog => {
        res.status(200).json(createdBlog)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error'})
        }    
    })
})

router.put('/:id', (req, res) => {
    db.Blog.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true})
        .then(updateBlog => {
            res.json(updateBlog)
        })
        .catch(err=>{
            console.log(err)
            res.status(503).json({message: 'Server error'})
        })
})



module.exports = router