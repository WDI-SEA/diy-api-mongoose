const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog -- list all blog posts
router.get('/', async (req, res) => {
    try {
        res.json({ message: 'yo, this route works!' })
    } catch(err) {
        console.log(err)
        res.status(500).json( { message: 'internal server error' })
    }
})

// POST /blog -- add a new blog post

// GET /blog/:id -- show one blog post

// PUT /blog/:id -- update one blog post

// DELETE /blog/:id -- delete one blog post

module.exports = router