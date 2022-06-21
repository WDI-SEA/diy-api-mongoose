const db = require('../models')

const router = require('express').Router()

// GET /crushes -- find all crushes
router.get('/', async (req, res) => {
    try {
        // find all the crushes
        const crushes = await db.Crush.find({})
        // send them to the client
        res.json(crushes)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /crushes/:id -- details on one celeb crush
router.get('/:id', async (req, res) => {
    try {
        const crush = await db.Crush.findById(req.params.id).populate('comments')
        res.json(crush)
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

// POST /crushes -- create a new celeb crush
router.post('/', async (req, res) => {
    try {
        const newCrush = await db.Crush.create(req.body)
        res.status(201).json(newCrush)
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

// PUT /crushes/:id -- update a crush
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const options = { new: true }
        const updatedCrush = await db.Crush.findByIdAndUpdate(id, req.body, options)
        res.json(updatedCrush)
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

// DELETE /crushes/:id -- delete a crush
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await db.Crush.findByIdAndDelete(id)
        res.sendStatus(204) // was successfull, nothing exists
    } catch (r) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

// POST /crushes/:id/comment
router.post('/:id/comment', async (req, res) => {
    try {
        const id = req.params.id
        const crush = await db.Crush.findById(id)
        const newComment = await db.Comment.create(req.body)
        crush.comments.push(newComment)
        newComment.opinions = crush
        await crush.save()
        await newComment.save()
        res.status(201).json(newComment)
    } catch (err) {
        console.log('FIRE', err)
        res.status(500).json({ msg: 'server error' })
    }
})

module.exports = router