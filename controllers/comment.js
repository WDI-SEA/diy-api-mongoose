const router = require('express').Router()
const db = require('../models')

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const options = { new: true }

    const updatedComment = db.Comment.findByIdAndUpdate(id, req.body, options)

    res.json(updatedComment)
  } catch (err) {
    console.warn(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id

    const deletedComment = db.Comment.findByIdAndDelete(id)

    res.json(deletedComment)
  } catch (err) {
    console.warn(err)
  }
})

module.exports = router
