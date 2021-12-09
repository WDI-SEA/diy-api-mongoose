const router = require('express').Router()
const db = require('../models')

// index (GET) of cuisine
router.get('/', (req, res) => {
    db.Cuisine.find()
    .then(foundCuisine => {
        res.status(200).json(foundCuisine)
    })
    .catch(err => {
        console.error
    })
})

// add (POST) a new dish
router.post('/', (req, res) => {
    db.Cuisine.create({
        name: 'Thit Kho',
        dishType: 'rice',
        description: 'braised pork belly, typically hard boiled eggs and served with rice'
    })
    .then(createdCuisine => {
        res.status(200).json(createdCuisine)
    })
    .catch(err => {
        console.error
    })
})

// edit (PUT) a new dish

// show (GET) details of a dish

// delete (DELETE) a dish

module.exports = router