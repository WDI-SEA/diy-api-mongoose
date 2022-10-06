const express = require('express')
const router = express.Router()
const db = require('../models')

// GET '/categories' -- display all categories
router.get('/', async (req, res) => {
    try{
        const allCategories = await db.Category.find({}).populate('expenses')
        res.json(allCategories)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

// POST '/categories' -- add a new category
router.post('/', async (req, res) => {
    try {
        const newCategory = await db.Category.create(req.body)
        res.status(201).json(newCategory)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

module.exports = router