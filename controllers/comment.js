const router = require('express').Router()
const db = require('../models')

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const options = { new: true }

    const updatedComment = await db.Comment.findByIdAndUpdate(
      id,
      req.body,
      options
    )

    res.json(updatedComment)
  } catch (err) {
    console.warn(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id

    await db.Comment.findByIdAndDelete(id)

    res.sendStatus(204)
  } catch (err) {
    console.warn(err)
  }
})

module.exports = router
