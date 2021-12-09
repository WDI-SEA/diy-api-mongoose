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
        res.status(503).json({message: 'Db snoozing away?'})
    })
})

// add (POST) a new dish
router.post('/', (req, res) => {
    db.Cuisine.create(req.body)
    .then(createdCuisine => {
        res.status(200).json(createdCuisine)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

// edit (PUT) a new dish

// show (GET) details of a dish

// delete (DELETE) a dish

module.exports = router