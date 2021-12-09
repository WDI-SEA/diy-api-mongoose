const router = require('express').Router()
const db = require('../models')

// index (GET) of cuisine
router.get('/', (req, res) => {
    res.json({message: 'this is the index route'})
})

// add (POST) a new dish
router.post('/', (req, res) => {
    res.json({message: 'this is the post route'})
})

// edit (PUT) a new dish

// show (GET) details of a dish

// delete (DELETE) a dish

module.exports = router