const router = require('express').Router()
const db = require('../models')

// PUT /comment/:id --update one comment
router.put("/:id", async (req, res) => {
    try {
        // find comment id from url params
        const id = req.params.id
        // tell it to return the updated comment
        const options = {new: true}
        // find specific comment using that id & updating using the req.body
        const updatedComment = await db.comment.findByIdAndUpdate(id, req.body, options)
        // send updated comment back to the user
        res.json(updatedComment)

        console.log('you have successfully updated the comment')
    } catch (error) {
        if(error.name === "ValidationError"){
            res.status(400).json({msg: error.message})
        }
        res.status(500).json({msg: 'server error'})
    }
})

// DELETE /comment/:id --delete one comment
router.delete('/:id', async (req, res) => {
    try {
        // get id of specific comment from url params
        const id = req.params.id
        // remove that comment from the db
        await db.comment.findByIdAndDelete(id)
        // send no content status
        res.sendStatus(204)
        
        console.log("you have successfully deleted the comment")
    } catch (error) {
        if(error.name === "ValidationError"){
            res.status(400).json({msg: error.message})
        }
        res.status(500).json({msg: 'server error'})
    }
})

module.exports = router