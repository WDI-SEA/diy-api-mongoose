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
    

module.exports = router;

