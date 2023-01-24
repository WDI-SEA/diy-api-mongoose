const express = require('express');
const router = express.Router();

const db = require('../models')

// mount our routes on the router

// GET /cobblog -- responds with all blogs
router.get('/', async (req, res) => {
    try {
        const allBlogs = await db.Blog.find()
        res.json({allBlogs})
        // res.status(201).json({allBlogs})
    }
    catch (error) {
        console.log(error)
        // res.status(500).json({message: 'error on GET all route'})
    }
})

// GET /cobblog/:id -- responds with one blog at the id in the url
router.get('/:id', async (req, res) => {
    try {
        const oneBlog = await db.Blog.findById(req.params.id)
        if (!oneBlog) {
            res.status(404).json({message: 'no blog found with that id'})
        return
    }
        res.json(oneBlog)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'error on GET one route'})
    }
})

// POST /cobblog -- create a new blog from paylod from request body
router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.json({newBlog})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message: 'error on POST route'})
    }
})

// PUT /cobblog/:id -- update a blog at the id in the url
router.put('/:id', async (req, res) => {
    try {
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!updatedBlog) {
            res.status(404).json({message: 'no blog found with that id'})
            return
        }

        res.json({updatedBlog})
    } catch (error) {
        console.log(error)
        if (error.kind === 'ObjectId') {
            res.status(404).json({message: 'no blog found with that id'})
            return
        } else {
            res.status(500).json({message: 'error on PUT route'})
        }
    }
})

// DELETE /cobblog/:id -- delete a blog at the id in the url
router.delete('/:id', async (req, res) => {
    try {
        const deletedBlog = await db.Blog.findByIdAndDelete(req.params.id)

        if(!deletedBlog) {
            res.status(404).json({message: 'no blog found with that id'})
            return
        }

        res.status(204)
    } catch (error) {
        console.log(error)
        if (error.kind === 'ObjectId') {
            res.status(404).json({message: 'no blog found with that id'})
        } else {
            res.status(500).json({message: 'error on DELETE route'})
        }
    }
})

module.exports = router;