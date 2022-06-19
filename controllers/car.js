const router = require('express').Router()
const { json } = require('express')
const db = require('../models')

//  GET /cars -- index of cars
router.get('/', async (req, res) => {
    try {
        //  find all cars
        const cars = await db.Car.find({})
        // send to the client
        res.json(cars)
    } catch(err){
        res.status(500).json({ msg: 'server error'})
    }
})

// GET /cars/:id -- details on a car

router.get('/:id', async (req, res) => {
    try{
        const car = await db.Car.findById(req.params.id)
    res.json(car)
    }catch (err) {
        res.status(500).json({ msg: 'server error'})
    }
})
// POST /cars --create cars

router.post('/:id', async (req, res) => {
    try {
        const newCar = await db.Car.create(req.body)
        res.status(201).json(newCar)
    }catch(err){
        console.log('post error',err)
        if (err.name === "ValidationError"){
            res.status(400).json({ msg: err.message })
        }
        res.status(500).json({ msg: 'server error'})
    }
})

// put /cars/:id -- update cars

router.put('/:id', async (req, res)=> {
    try {
        // get id from the url params
        const id = req.params.id
        // search for the id in the db, and update using the req.body
        const options = { new:true }
        const updatedCar = await db.Car.findByIdAndUpdate(id, req.body, options)
        // send the updated car back to client
        res.json(updatedCar)
    }catch (err) {
        console.log('post error',err)
        if (err.name === "ValidationError"){
            res.status(400).json({ msg: err.message })
        }
        res.status(500).json({ msg: 'server error'})
    }
})

// DELETE /cars/:id --delete cars

router.delete('/:id', async (req, res) => {
    try {
        // get the id from params
        const id = req.params.id
        // delete that car in the db
        await db.Car.findByIdAndDelete(id)
        // send 'no content' status
        res.sendStatus(204) // was successful --nothing exists
    } catch(err){
        console.log('post error',err)
        if (err.name === "ValidationError"){
            res.status(400).json({ msg: err.message })
        }
        res.status(500).json({ msg: 'server error'})
    }
})

module.exports = router