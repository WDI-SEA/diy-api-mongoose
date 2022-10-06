const express = require("express")
const router = express.Router()
const db = require("../models")

router.put("/:id", async (req, res) => {
    try {
        const updateComment = await db.Comment.findById(req.params.id)
        updateComment.header = req.body.header
        updateComment.content = req.body.content
        res.json(updateComment)
        await updateComment.save()
    } catch (err) {
        console.warn(err)
    }
})

router.delete("/:id", async (req, res) =>{
    try {
        await db.Comment.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (err) {
        console.warn(err)
    }
})

module.exports = router