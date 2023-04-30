const express = require("express")
const router = express.Router()
const db = require("../models")

// GET /posts -- READ list all blog posts
router.get("/", async (req, res) => {
    try {
        const allPosts = await db.Post.find({})
        res.json(allPosts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// POST /posts -- CREATE a new blog post
router.post("/", async (req, res) => {
    try {
        const newPost = await db.Post.create(req.body)
        res.json({ result: newPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// GET /posts/:id -- READ a specific blog post
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const foundPost = await db.Post.findById(id)
        res.json({ result: foundPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// PUT /posts/:id -- UPDATE a specific blog post
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedPost = await db.Post.findByIdAndUpdate(id, req.body, { new: true })
        res.json({ result: updatedPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

// DELETE /posts/:id -- DESTROY a specific blog post
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await db.Post.findByIdAndDelete(id)

        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router