const express = require('express');
const router = express.Router();
const db = require('../models');

// GET	index	/blog	list all blog posts

router.get('/', async (req, res) => {
    try {
        // find all blogs
    const blogs = await db.Blog.find({})
    res.status(200).json(blogs)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
});

// POST	create	/blog	add a new blog post

router.post('/', async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
});

// GET	detail/show	/blog/:id	show one blog post

router.get('./:id', async (req, res) => {
    try {
        const foundBlog = await db.Blog.findById(req.params.id)
        res.status(200).json(foundBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
});

// PUT	update	/blog/:id	update one blog post

router.put('./:id', async (req, res) => {
    try{
        const options = { new:true }
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
        res.status(202).json(updatedBlog)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
});

// DELETE	delete	/blog/:id	delete one blog post

router.delete('/:id', async (req, res) => {
    try {
        await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: 'internal server error' })
    }
});

module.exports = router;