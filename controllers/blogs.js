//create an instance of the express router
const express = require('express')
const db  = require('../models')
const router = express.Router()

//GET /blogs all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch (err) {
        console.log(err)
    }
})

//POST /blogs add a new blog
router.post('/', async (req, res) => {
    try {
        const blog = await db.Blog.create(req.body)
        res.json(blog)
    } catch (err) {
        console.log(err)
    }
})

//GET /blogs/:id show one blog
router.get('/:id', async (req, res) => {
    try {
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
    } catch (err) {
        console.log(err)
    }
})

//PUT /blogs/:id update one blog post
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog =await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
    } catch (err) {
        console.log(err)
    }
})

//DELETE /blogs/:id delete a post
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog= await db.Blog.findByIdAndDelete(req.params.id)
    } catch (err) {
        console.log(err)
    }
})

//export the router
module.exports = router