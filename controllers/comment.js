const db = require('../models')
const router = require('express').Router()

// PUT...(/:id)
router.put('/:id', async (req, res)=> {
    try {
        const id = req.params.id
        const editedComment = await db.Comment.findOneAndUpdate({
            _id: id
        },
        req.body,
        options = {new: true}
        )
        if(!editedComment) return res.status(404).json({ message: 'unable to find comment' })
        res.json(editedComment)
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: "database weren't workin" })
    }
})

// DELETE...(/:id)
router.delete('/:id', async (req, res)=> {
    try {
        const deleteComment = await db.Comment.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: 'the comment was deleted' })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router