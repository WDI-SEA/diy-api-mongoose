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
