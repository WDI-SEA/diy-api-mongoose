const router = require('express').Router()
const db = require('../models')

//index
router.get('/', (req, res) => {
    res.json({msg: 'blog index route'})
})

//make a new blog post
router.post('/', (req, res) => {
    res.json({msg: 'post new blog route'})
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