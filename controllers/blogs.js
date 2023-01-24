// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')

// define routes

// GET /blog -- get all blogs
router.get('/', async (req, res) => {
    try {
        const allBlogs = await db.Blog.find({})
        res.json(allBlogs)

    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})

// Post /blog/:id -- create a new blog
router.post('/', async (req, res) => {
    try {   
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json({ newBlog })

    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})


// GET /blog:id -- get a single blog
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        if (!blog) {
            res.status(404).json({ msg: "not found" })
            return
        }
        res.json(blog)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})


// PUT /blog/:id -- update a blog
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await db.Blog.findOneAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedBlog) {
            res.status(404).json({ msg: "not found" })
            return
        }
        res.json(updatedBlog)

    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})


// DELETE /blog/:id
router.delete('/:id', async (req, res) => {
        try {
            // get the id from the url, and destroy that id
            const deletedBlog = await db.Blog.findByIdAndDelete(req.params.id)
            if (!deletedBlog) {
                res.status(404).json({ msg: "not found" })
                return // don't want to send headers twice, stop the function
            }
            // send a status of 204 (no content) and nothing else
            res.sendStatus(204)
        } catch (err) {
            console.log(err)
            if (err.kind === "ObjectId") {
                res.status(404).json({ msg: err.message })
            } else {
                res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
            }
        }
    })
    

// export the router
module.exports = router