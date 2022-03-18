const db = require('../models')
const router = require('express').Router()

// PUT
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = {new: true}
        // Find the Post ID
        const updatedComment = await db.Comments.findOneAndUpate({_id: id}, req.body, options)
        res.json(updatedComment)
    } catch (err) {
        console.log(err)
        res.status(503).json({message: "Fail to update the comments!"})
    }
})


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.Comments.findByIdAndDelete(id)
        res.status(204).json({message: "Comments successfully deleted!"})
    } catch (err) {
        console.log(err)
        res.status(503).json({message: "The comment did not delete!"})
    }
})
module.exports = router