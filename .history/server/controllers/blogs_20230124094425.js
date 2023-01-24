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


module.exports = router;

