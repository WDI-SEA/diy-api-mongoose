const express = require('express')
const router = express.Router()
const db = require('../models')

//GET /blogs - read all blogs
router.get('/', async (req, res) => {
    try {
        //find all blogs
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

//GET /blogs/:id - READ single blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        if (!blog) {
            res.status(404).json({ msg: 'not found'})
            return
        }
        res.json(blog)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

//POST /blogs - CREATE a blog
router.post('/', async (req, res) => {
    try {
        // add a new blog to db, based on req.body
        const newBlog = await db.Blog.create(req.body)
        res.json(newBlog)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})
// PUT /blogs/:id - UPDATE blog
router.put('/:id', async (req, res) => {
    try {
        // get the id from the url
        // get the data to update in from the req.body
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedBlog) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // send the udpated bounty     
        res.json(updatedBlog)   
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE /blogs/:id -- DESTROY a blog
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the url, and destroy that id
        const deletedBlog = await db.Bounty.findByIdAndDelete(req.params.id)
        if (!deletedBlog) {
            res.status(404).json({ msg: "not found" })
            return // don't want to send headers twice, stop the function
        }
        // send a status of 204 (no content) and nothing else
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})




//export router
module.exports = router