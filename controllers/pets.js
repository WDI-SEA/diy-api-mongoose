const express = require('express')
const router = express.Router()
const Pet = require('../models/pet')

//testing

// Pet.create({
//     name: 'Kronk',
//     animal: 'Cat',
//     nickname: 'Numpy Flerkin',
//     age: 8,
//     weight: 14,
//     favoriteToy: ['Laser pointer', 'treat ball']
// }, (err, pet) =>{
//     if(err) console.error(`❌ trouble in pet create`)
//     console.log(`{pet.name} was created`)
// })

//GET --> Index '/'

router.get('/', (req, res) =>{
    Pet.find({}, (err, pets) =>{
        if(err){
            console.error(`❌ Error in pets index route:\n${err}`)
            res.status(500).json({ error: 'Error in pets Index route'})
        }
        res.json({ pets })
    })
})

//Post --> create '/'

//GET --> Getail/show '/:id'

//PUT  --> Update '/:id'

//Delete --> delete '/:id'

module.exports = router