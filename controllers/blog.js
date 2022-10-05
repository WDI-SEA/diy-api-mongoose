const express = require("express")
const router = express.Router()
const db = require("../models")

router.get("/", async (req, res) => {
    try {
        const blogs = await db.Blog.find({})
        res.json(blogs)
    } catch(err) {
        console.log(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const oneBlog = await db.Blog.findById(req.params.id)
        res.json(oneBlog)
    } catch(err) {
        console.log(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const newBlog = await db.Blog.create(req.body)
        res.json(newBlog)
    } catch(err) {
        console.log(err)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const options = { new: true }
        const updateBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updateBlog)
    } catch(err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await db.Blog.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router