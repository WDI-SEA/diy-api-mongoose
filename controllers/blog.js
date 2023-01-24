const express = require('express')
const router = express.Router()
const db = require('../models')


router.get('/', async (req, res) => {
    try {
        const blogposts = await db.Post.find({})
       
        res.json(blogposts)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
 })


router.get('/:id', async (req, res) => {
    try {
        const blogpost = await db.Post.findById(req.params.id)
        if (!blogpost) {
            res.status(404).json({ msg: "not found" })
            return
        }
        res.json(blogpost)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})


router.post('/', async (req, res) => {
    try {
        const blogpost = await db.Post.create(req.body)
        console.log(req.body)
        res.status(201).json(blogpost)
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
    }
})

router.put('/:id', async (req, res) => {
    try {

        const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedPost) {
            res.status(404).json({ msg: "not found" })
            return 
        }  
        res.json(updatedPost)   
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await db.Post.findByIdAndDelete(req.params.id)
        if (!deletedPost) {
            res.status(404).json({ msg: "not found" })
            return 
        }
        res.sendStatus(204)
    } catch (err) {
        console.log(err)
        if (err.kind === "ObjectId") {
            res.status(404).json({ msg: err.message })
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System Administrator' })
        }
    }
})


module.exports = router