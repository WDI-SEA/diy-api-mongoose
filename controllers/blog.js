const express = require("express")
const router = express.Router();
const db = require("../models")

router.get("/", async (req, res) => {
    try {
        const allPosts = await db.Post.find({})
        res.json({ result: allPosts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        foundPost = await db.Post.findById(id)
        res.json({ result: foundPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/", async (req, res) => {
    try {
        const newPost = await db.Post.create(req.body)
        res.json({ result: newPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updatedPost = await db.Post.findByIdAndUpdate(id, req.body,
            {
                new: true
            })
            res.json({ response: updatedPost })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await db.Post.findByIdAndDelete(id)
        res.json( { response: "baleeted" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = router;