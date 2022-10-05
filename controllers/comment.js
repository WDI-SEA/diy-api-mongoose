const express = require("express")
const router = express.Router()
const db = require("../models")

router.put("/:id", async (req, res) => {
    try {
        const options = {new: true}
        const updateComment = await db.Blog.findByIdAndUpdate(req.params.id, req.body, options)
        console.log(updateComment)
        res.json(updateComment)
    } catch(err) {
        console.log(err)
    }

})

module.exports = router