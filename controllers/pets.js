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
router.post('/', (req,res) =>{
    Pet.create(req.body, (err, pet ) =>{
        if(err){
            console.error(`❌ Error in pets create route:\n${err}`)
            res.status(500).json({ error: 'Error in pets create route'})
        }
        res.json({ pet })
    })
} )

//GET --> detail/show '/:id'

router.get('/:id', (req, res) =>{
    Pet.findById(req.params.id, (err, pet) =>{
        if(err){
            console.error(`❌ Error in pets details route:\n${err}`)
            res.status(500).json({ error: 'Error in pets details route'})
        }
        res.json({ pet })
    })
})

//PUT  --> Update '/:id'

router.put('/:id', (req, res) =>{
    Pet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true },
        (err, pet) =>{
            if(err){
                console.error(`❌ Error in pets update route:\n${err}`)
                res.status(500).json({ error: 'Error in pets update route'})
            }
            res.json({ pet })
        }
    )
})

//Delete --> delete '/:id'

module.exports = router