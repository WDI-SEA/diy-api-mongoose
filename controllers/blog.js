const router = require('express').Router()
const db = require('../models')

// INDEX ROUTE
router.get('/', (req, res) => {
    db.Blog.find()
    .then(foundBlog => {
        res.status(200).json(foundBlog)
    })
    .catch(err => {
        console.lor(err)
        res.status(503).json({message: "Database asleep / Mongo Not running"})
    })
})

// POST ROUTE - new post
router.post('/', (req,res) => {
    db.Blog.create(req.body)
    .then(createdBlog => {
        res.status(200).json(createdBlog)
        // res.send("Post submitted!: ", createdBlog)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error, check data types'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

// PUT ROUTE - edit post
router.put('/:id', (req, res) => {
    db.Blog.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new:true})
    .then(updatedBlog => {
        res.json(updatedBlog)
    })
    .catch(err => {
        console.log("Failed to edit: ", err)
    })
})

// SHOW ROUTE
router.get('/:id', (req, res) => {
    db.Blog.findOne({_id: req.params.id},
        req.body,
    )
    .then(showBlog => {
        res.json(showBlog)
    })
    .catch(err => {
        console.log("Failed to show: ", err)
    })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    db.Blog.findOneAndDelete({_id: req.params.id},
        req.body,)
    .then(deletedBlog => {
        res.json(deletedBlog)
    })
    .catch(err => {
        console.log("Failed to delete: ", err)
    })
})

module.exports = router