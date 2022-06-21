const router = require('express').Router()
const db = require('../models')

//list all blog posts
router.get('/', async (req, res) => {
    try {
        //find all blogs
        allBlogs = await db.Blog.find({})
        // send them to the client     
        res.json(allBlogs)
    } catch (error) {
        console.warn(error)
    }
})

//add new blog post
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch (error) {
        console.warn(err)
        res.status(500).json({ msg: 'server error'})
    }
})

//show one blog post
router.get('/:id', async (req, res) => {
    try {
        // get id of a specific blog from the url params
        console.log(re.params.id)
        const blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ msg: 'server error'})
    }
})

//update one blog post
router.put('/:id', async (req, res) => {
    try {
        // get id from url params
        const id = req.params.id
        // search for the id in the db, and update using the req.body
        const options = { new: true } // return the updated blog to us
        const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, options)
        res.json(updatedBlog)
    } catch (error) {
        console.warn(error)
        res.status(500).json({ msg: 'server error'})
    }
})

//delete one blog post
router.delete('/:id', async (req, res) => {
    try {
        // get id from url params
        const id = req.params.id
        // delete that blog in the db
        await db.Blog.findByIdAndDelete(id)
        // send no content status
        res.sendStatus(204) // was successful -- nothing exists
    } catch (error) {
        console.warn(error)
        res.status(500).json({ msg: 'server error'})
    }
})

module.exports = router