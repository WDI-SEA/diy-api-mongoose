// create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')
// mount our routes to the router

router.get('/', async (req, res) => {
    try {
        // get all bounties from the db
        const allBlogs = await db.Blog.find()
        // send the bounties back to the client
        res.json(allBlogs)
        res.status(201).json(allBlogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
// GET
router.get('/:id', async (req, res) => {
    try {
        const blog = await db.Blog.findById(req.params.id)
        if (!blog) {
            res.status(404).json({ message: 'blog not found' })
            return 
        }
        
        res.json(blog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
       
        const newBlogs = await db.Blog.create(req.body)
        res.status(201).json(newBlogs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


router.put('/:id', async (req, res) => {
    try {
      
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedBlog) {   
            res.status(404).json({ message: 'Bounty not found' })
        }
        
        res.json(updatedBlog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        
        
        const deletedBlog = await db.Blog.findByIdAndDelete(req.params.id)
        if (!deletedBlog) {   
            res.status(404).json({ message: 'Blog not found' })
        }

        res.json(deletedBlog) // this worked????
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// export the router
module.exports = router