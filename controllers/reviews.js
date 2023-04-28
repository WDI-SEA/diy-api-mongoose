const express = require("express")
const router = express.Router()
const db = require("../models")

// GET /reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await db.Review.find({})
        res.json({ results: reviews})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

// POST /reviews
router.post("/", async (req, res) => {
    try {
        const newReview = await db.Review.create(req.body)
        res.json({ result: newReview })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

// GET /reviews/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const foundReview = await db.Review.findById(id)
        res.json({ result: foundReview })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updatedReview = await db.Review.findByIdAndUpdate(id, req.body, { new: true })
        res.json({ result: updatedReview })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        await db.Review.findByIdAndDelete(id)
        res.json({ message: "document deleted"}) // send no content status
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" })
    }
})

module.exports = router