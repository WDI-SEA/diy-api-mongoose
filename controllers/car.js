const router = require('express').Router()
const db = require('../models')

// GET /cars -- index of cars
router.get('/', async (req,res)=>{
    try {
        // find all cars
        const cars = await db.cars.find({})
        //send to client
        res.json(cars)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' })
    }
})

// GET /cars/:id -- single car
router.get('/:id', async (req,res)=>{
    try {
        // get id from url params
        console.log(req.params.id)
        const car = await db.cars.findById(req.params.id)
        // send to client
        res.json(car)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})

// POST /cars -- create new car
router.post('/', async (req,res)=>{
    try {
        // const car = new db.cars()
        const newCar = await db.cars.create(req.body)
        res.status(201).json(newCar)
    } catch (error) {
        console.warn(error)
        if(error.name === "ValidationError"){
            res.status(400).json({ msg: error.message })
        } else {
            res.status(500).json({ msg: 'server error' })
        }

    }
})

// PUT /cars/:id -- update a car
router.put('/:id', async (req,res)=>{
    try {
        // get id from url params and update
        const id = req.params.id
        const options = {new:true}
        const updatedCar = await db.cars.findByIdAndUpdate(id, req.body, options)
        //send the updated car back to client
        res.json(updatedCar)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})


// DELETE /cars/:id -- delete a car
router.delete('/:id', async (req,res)=>{
    try {
        // get id from url params
        // console.log(req.params.id)
        await db.cars.findByIdAndDelete(req.params.id)
        // send no content status 
        res.sendStatus(204) //nothing exists was successful
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'server error' }) 
    }
})


module.exports = router