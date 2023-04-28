const express = require('express')
const router = express.Router()
const db = require('../models')



// GET 
router.get('/', async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json({results: blogs})
    }catch(err){
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})



// GET 
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const foundBlog = await db.Blog.findById(id)
        res.json({ result: foundBlog })
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})




// POST 
router.post("/", async (req, res) => {
    try {
        const newPost = await db.Blog.create(req.body)
        res.json({ result: newPost})
    } catch(err) {
        console.log(err)
        res.json({ message: 'server is on fire'})
        res.status(500).json({message: "internal server error"})
    }
})



// PUT 
router.put('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const updatedBlog = await db.Blog.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        res.json({ result: updatedBlog })
    }catch(err) {
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// DELETE 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        await db.Blog.findByIdAndDelete(id)

        res.sendStatus(204)
    }catch(err) {
        console.log(err)
        res.status(500).json({ message: "internal server Error"})
    }
})

module.exports = router