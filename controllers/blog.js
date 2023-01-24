const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blog
router.get('/', async (req, res) => {
  try {
    const posts = await db.Post.find({})
    res.json(posts)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' })
  }
})

// POST /blog
router.post('/', async (req, res) => {
  try {
    const newPost = await db.Post.create(req.body)
    res.status(201).json(newPost)
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server Error' })
  }
})

// GET /blog/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await db.Post.findById(req.params.id)
    res.json(post)
  } catch (err) {
    console.log(err)
    if (err.name === 'CastError') {
      res.status(404).json({ message: 'Post not found' })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
})

// PUT /blog/:id
router.put('/:id', async (req, res) => {
  try {
    const post = await db.Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!post) {
      res.status(404).json({ message: 'Post not found' })
    }
    res.json(post)
  } catch (err) {
    console.log(err)
    if (err.name === 'CastError') {
      res.status(404).json({ message: 'Post not found' })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
})

// DELETE /blog/:id
router.delete('/:id', async (req, res) => {
  try {
    const post = await db.Post.findByIdAndDelete(req.params.id)
    if (!post) {
      res.status(404).json({ message: 'Post not found' })
    }
    res.json(post)
  } catch (err) {
    console.log(err)
    if (err.name === 'CastError') {
      res.status(404).json({ message: 'Post not found' })
    } else {
      res.status(500).json({ message: 'Server Error' })
    }
  }
})

module.exports = router
