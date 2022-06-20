const router = require('express').Router()
const comment = require('../models')
const db = require('../models')

// GET /blog - all blog posts
router.get('/', async(req, res) => {
    try {

    } catch(error) {
        console.warn('not working right 😢', error)
        res.status(500).json({msg: 'server error'})
    }
})

// POST /blog - new blog post
router.post('/', async(req, res) => {
    try {

    } catch(error) {
        console.warn('POST ERROR 📄', error)
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /blog/:id - show specific blog post
router.get('/:id', async(req, res) => {
    try {

    } catch(error) {
        console.war('BLOG ERROR 📝', error)
    }
})

// POST /blog/:id/comment - post new comment to specific blog post
router.post('/:id/comment', async(req, res) => {
    try {

    } catch(error) {
        console.warn('COMMENT ERROR 🔇', error)
    }
})

// PUT /blog/:id - update specific blog post
router.put('/:id', async(req, res) => {
    try {

    } catch(error) {
        console.warn('UPDATE ERROR ⬆️', error)
    }
})

// DELETE /blog/:id - delete specific blog post
router.delete('/:id', async(req, res) => {
    try {

    } catch(error) {
        console.warn('DELETE ERROR 🗑', error)
        res.status(500).json({ message: 'Server Error' })
    }
})


module.exports = router