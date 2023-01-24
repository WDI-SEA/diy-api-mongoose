const express = require('express');
const router = express.Router();




router.get ('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', getBlog, (req, res) => {
    res.json(res.blog);
});


router.post('/', async (req, res) => {
    const blog = new Blog({
        name: req.body.name,
        title: req.body.title,
        content: req.body.content
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', getBlog, async (req, res) => {
    if (req.body.name != null) {
        res.blog.name = req.body.name;
    }
    if (req.body.title != null) {
        res.blog.title = req.body.title;
    }
    if (req.body.content != null) {
        res.blog.content = req.body.content;
    }
    try {
        const updatedBlog = await res.blog.save();
        res.json(updatedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:id', getBlog, async (req, res) => {
    try {
        await res.blog.remove();
        res.json({ message: 'Deleted Blog' });
    } catch (err) {
        res.status(500).json({ message: err.message });


module.exports = router;

