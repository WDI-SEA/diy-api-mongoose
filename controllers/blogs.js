const express = require('express')
const router = express.Router()
const db = require('../models')

// GET /blogs -- READ all blogs
router.get('/', async (req, res) => {
    res.json({ msg: 'show all blogs' })
})

// GET /blogs/:id -- READ single blog
router.get('/:id', async (req, res) => {
    res.json({ msg: 'show blog with id: ' + req.params.id  })
})

// POST /blogs -- CREATE a blog
router.post('/', async (req, res) => {
    try {
        // use the data in the request body to create a new blog
        const newBlog = await db.Blog.create(req.body)
        // send the new blog back to the client
        res.json(newBlog)
    } catch (err) {
        console.log(err)
        if (err.name === "ValidatorError") {
            res.status(400).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: "The server room is on fire 🔥" })
        }
    }
})

// PUT /blogs/:id -- UPDATE blog
router.put('/:id', async (req, res) => {
    res.json({ msg: 'update blog with id: ' + req.params.id  })
})

// DELETE /blogs/:id -- DESTROY a blog
router.delete('/:id', async (req, res) => {
    res.json({ msg: 'destroy blog with id: ' + req.params.id  })
})

module.exports = router
