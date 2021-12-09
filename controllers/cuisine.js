const router = require('express').Router()
const db = require('../models')

// index (GET) of cuisine
router.get('/', (req, res) => {
    db.Cuisine.find()
    .then(foundCuisines => {
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
router.put('/:id', (req, res) => {
    db.Cuisine.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true})
        .then(updatedCuisine => {
            res.json(updatedCuisine)
        })
        .catch(err => {
            console.error
            res.status(503).json({message: 'Server Error'})
        })
})

// show (GET) details of a dish
router.get('/:id', (req, res) => {
    db.Cuisine.find({_id: req.params.id})
    .then(foundCuisine => {
        res.json(foundCuisine)
    })
    .catch(err => {
        console.error
    })
})

// delete (DELETE) a dish

module.exports = router