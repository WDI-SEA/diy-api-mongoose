const express = require('express')
const router = express.Router()
const db = require('../models')

// PUT /comment
router.put('/:id', async (req,res)=> {
    try{
        const updateComment = await db.Comment.findById(req.params.id)
        updateComment.header = req.body.header
        updateComment.content = req.body.content
        res.json(updateComment)

    }catch(err){
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        }
})

// DELETE /comment/:id
router.delete('/:id', async (req,res)=> {
    try{
        await db.Comment.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    }catch(err){
            console.log(err)
            res.status(500).json({ message: 'Internal server error' })
        }
})

module.exports = router