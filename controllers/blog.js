// const { db } = require('../models/bounty')

const router = require('express').Router()

const db = require('../models')

router.get('/', async (req, res) => {
    try{
        const posts = await db.Blog.find({})
        res.json(posts)
    } catch {

    }
})




router.get('/:id', async (req, res) => {
    try{
        const bounty = await db.Blog.findById(req.params.id)
        res.json(posts)
    } catch {

    }
})

router.post('/', async (req, res ) => {
    try{
        const newPost = await db.Blog.create(req.body)
        res.status(201).json(newPost)
    } catch (err){
        console.log('hi')

    }
})

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id

        const options = { new: true}
        const updatedPost = await db.Blog.findByIdAndUpdate(id, req.body, options)

        res.json(updatedPost)
    } catch {

    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id

        await db.Blog.findByIdAndDelete(id)

        res.sendStatus(204)
    } catch {

    }
})

module.exports = router
