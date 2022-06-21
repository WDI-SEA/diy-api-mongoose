const db = require('../models')

const router = require('express').Router()

// PUT /comment/:id
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = { new: true }
        const updatedComment = await db.Comment.findByIdAndUpdate(id, req.body, options)
        res.json(updatedComment)
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})
// DELETE /comment/:id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.Comment.findByIdAndDelete(id)
        res.sendStatus(204) // was successfull, nothing exists
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

module.exports = router