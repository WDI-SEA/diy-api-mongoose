let express = require('express')
const db = require('../models')

const router = express.Router()

router.get('/', async (req, res) => {
    try{
        let blogs = await db.Blog.find({})
        res.json(blogs)
        // res.json({msg: 'welrkwjerlwkejrwlkrjwl'})
    } catch(err) {
        res.status(500).json({msg: 'my b'})
    }
})

router.post('/', async (req, res) => {
    try{
        const newBlog = await db.Blog.create(req.body)
        res.status(201).json(newBlog)
    } catch(err) {
        res.status(500).json({error: 'on my end'})
    }
})

router.get('/:id', async (req, res) => {
    try {
        let blog = await db.Blog.findById(req.params.id)
        res.json(blog)
    } catch(err) {
    console.log(err)
    if(err.kind === 'ObjectId') {
        res.status(404).json({YOU: 'Thats a you problem'})
    }
    res.status(500).json({msg: 'Thats a me problem'})
    }
})

router.put('/:id', async (req, res) => {
    try {
        let blogUpdate = await db.Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        if(!blogUpdate) {
            res.status(404).json({massage: '👀👀👀👀👀👀👀👀👀👀👀👀'})
            return
        }
        res.status(202).json(blogUpdate)
    } catch(err) {
        if(err.kind === 'ObjectId') {
            res.status(404).json({YOU: 'I dont know what you expect, you messed this one up'})
            return
        }
            res.status(500).json({msg: 'welp sorry bout that'})
        }
})

router.delete('/:id', async (req, res) => {
    try {
        let blogDelete = await db.Blog.findByIdAndDelete(req.params.id)
        if(!blogDelete) {
            res.status(404).json({grapejuice: 'this is an original error message'})
            return
        }
        res.sendStatus(204)
    } catch(err) {
        if(err.kind === 'ObjectId') {
            res.status(404).json({YOU: 'buuuuuh suhuuulllluuummmm uuuuuuhhmmmm buuuuuh'})
            return
        }
            res.status(500).json({msg: 'shooup de doup de doo lookee whoo'})
        }
    }
)
module.exports = router