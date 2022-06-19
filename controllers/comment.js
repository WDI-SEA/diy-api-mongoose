const router = require('express').Router()
const db = require('../models')

//PUT /comment/:id -- edit a spacific comment 
router.put('/:id', async (req, res) => {
    try {
        // search for the id in the db, and update using the req.body
        console.log(req.params.id)
        const updatedComment = await db.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
        // send the updated bounty back to client
        res.json(updatedComment)
        console.log('SUCCESSSS')

    } catch (err) {
        if (error.name === "ValidationError") {
            res.status(400).json({ msg: error.message })
        }
        res.status(500).json({ msg: 'server error' })
    }

})

//DELETE /comment/:id -- delete a comment 
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the req.params 
        const id = req.params.id
        // delete that bounty in the db
        await db.Comment.findByIdAndDelete(id)
        // send 'no content' status
        console.log('DELETED')
        res.sendStatus(204) // was successful -- nothing exists
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

module.exports = router