const router = require('express').Router()
const { response } = require('express')
const db = require('../models')




router.post('/',(req,res)=>{
    db.Coffee.create(req.body)
    .then(createdCoffee => {
        res.status(200).json(createdCoffee)
    }).catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError') {
            res.status(406).json({message: 'Validation Error'})
        } else {
            res.status(503).json({message: 'Database or server error!'})
        }
    })
})

// router.get('/',(req,res)=>{
//     db.Coffee.find()
//     .then(foundCoffee => {
//         let allCoffee = {}
//         for (const property in foundCoffee) {
//             if (Object.hasOwnProperty.call(foundCoffee, property)) {
//                 let element = foundCoffee[property];
//                 allCoffee = element + allCoffee
//                 console.log('This is allCoffee: ', allCoffee);
//                 res.write("coffeeName: " + allCoffee.coffeeName)
//                 console.log(element.coffeeName);
//             }
//         }
//     }).catch(err => console.log(err))
// })
router.get('/',(req,res)=>{
    db.Coffee.find()
    .then(foundCoffee => {

        foundCoffee.map(function(a) { 
            res.write("\n coffeeName: " + a.coffeeName) 
            res.write("\n roaster: " + a.roaster)
            res.write("\n price: " + a.price)
            res.write("\n object Id: " + a.id)
            res.write("\n") 
        })
        res.end()
    }).catch(err => console.log(err))
})

router.put('/:id', (req,res) => {
    db.Coffee.findOneAndUpdate({
        _id: req.params.id
    })
    req.body,
    {new:true}
    .then(updatedCoffee=> {
        res.json(updatedCoffee)
    })
})

router.delete('/:id', (req, res)=> {
    db.Coffee.deleteOne({
        _id: req.params.id
    })
    .then(deletedCoffee => {
        res.json(deletedCoffee)
    })
    .catch(err => {
        console.log(err);
    })
})
module.exports = router