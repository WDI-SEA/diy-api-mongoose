const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog -- return array of all blogs
router.get('/', async (req, res) => {
    try {
        // find all blogs
        const blogs = await db.Blog.find({})
        // send them back as json (w/default status code 200)
        res.json(blogs)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// GET /blog/:id -- return a single blog 
router.get('/:id', async (req, res) => {
    try {
        // get a specific id from the req.params.id
        // look up that id in the database
        const blog = await db.Blog.findById(req.params.id)
        // send the found blog back as json
        res.json(blog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})


// POST /blog -- create a new blog in the db
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// PUT /blog/:id -- update a single blog
router.put('/:id', async (req, res) => {
    try {
        // getting the id from the url route parameters
        // getting the data to update from the request body
        // ensuring that the query returns the new values with the options object
        const options = { new: true }
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

// DELETE /blog/:id -- destroy a blog
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the url route parameters
        // delete that thing with that id
        await db.Blog.findByIdAndDelete(req.params.id)
        // status 204 -- no content (we cannot send and json data back with this status)
        // you could also send the deleted item back or you could redirect to GET /blog
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
})

module.exports = router