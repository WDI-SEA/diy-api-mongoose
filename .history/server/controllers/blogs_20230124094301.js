const express = require('express');
const router = express.Router();




router.get ('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        

module.exports = router;

