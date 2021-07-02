const express = require('express')
const router = require('express').Router()
const db = require('../models')

router.use(express.urlencoded({ extended: false }))


router.get('/', async (req, res) => {
    try {
        const keebs = await db.Blog.find({})
        res.json({ keebs })
    } catch (err) {
        console.log(err)
    }
})

//post route
router.post('/new', async (req, res)=> {
    try {
        const keebs = 
            await db.Blog.create({
            name: req.body.name,
            title: req.body.title,
            content: req.body.content
            }) 
        } catch(err) {
            console.log(`failed to add`, err)
        }
        res.redirect('/keebs')
    })

router.put ('/:id', async (req, res) => {
    try {
        const keebs = await db.Blog.findById(req.params.id)
        keebs.name = req.body.name,
        keebs.title = req.body.title,
        keebs.content = req.body.content

        keebs.save()
    } catch (err) {
        console.log(`failed to change`, err)
    }
    res.redirect('/keebs')
})


router.delete('/:id', async (req, res) => {
    try {
        const keebs = await db.Blog.findByIdAndDelete(req.params.id)
    } catch (err) {
        console.log(`failed to delete`, err)
    }
    res.redirect('/keebs')
})

module.exports = router