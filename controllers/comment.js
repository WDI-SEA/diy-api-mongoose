const router = require('express').Router()
const db = require('../models')

// PUT /comment/:id - update specific comment
router.put('/:id', async(req, res) => {
    try {
        // find comment id from url params
        const id = req.params.id
        const options = { new: true }
        // find comment by id and update
        const updatedComment = await db.comment.findByIdAndUpdate(id, req.body, options)
        // send updated comment back to client
        res.json(updatedComment)
        // console.log('the updated comment:::', updatedComment)

    } catch(error) {
        if(error.name === "ValidationError"){
            res.status(400).json({ message: error.message })
        }
        res.status(500).json({ message: 'server error' })
    }
})

// DELETE /comment/:id - delete specific comment
router.delete('/:id', async(req, res) => {
    try {
        // get id of comment from url params
        const id = req.params.id
        // delete comment from the db
        await db.comment.findByIdAndDelete(id)
        // no content status
        res.sendStatus(204)

        console.log('Destruction of comment successful')
    } catch(error) {
        if(error.name === "ValidationError"){
            res.status(400).json({ message: error.message})
        }
        res.status(500).json({ message: 'server error'})

    }
})


module.exports = router