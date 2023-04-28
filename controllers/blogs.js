const express = require("express")
const router = express.Router()
const db = require("../models")

// GET /blogs -- READ all blogs

// GET /blogs/:id -- READ single blog
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const foundBlog = await db.Blog.findById(id)
        if (!foundBlog) {
            res.status(404).json({ message: "Blog not Found" })
        }
        res.json({ result: foundBlog })
    } catch (err) {
        // malfourmed object id error
        console.log(err)
        if (err.name === "CastError") {
            res.status(400).json({ message: err.message })
        } else {
            res.status(500).json({ message: "Server room is on fire! 🔥🧯"  })
        }
    }
})

// POST /blogs -- CREATE blog
router.post("/", async (req, res) => {
    try {
        // create a new blog
        const newBlog = await db.Blog.create(req.body)
        res.json({ result: newBlog })
    } catch (err) {
        console.log(err)
        if (err.name === "ValidationError") {
            res.status(400).json({ message: err.message })
        } else {
            res.status(500).json({ message: "Server room is on fire! 🔥🧯" })
        }

    }
})

// PUT /blogs/:id -- UPDATE blog

// DELETE /blogs/:id -- DESTROY blog

module.exports = router
