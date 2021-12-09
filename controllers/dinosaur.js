const router = require ('express').Router()
const db = require('../models')

//index
router.get('/', (req,res)=>{
    db.Dinosaur.find()
    .then(foundDinosaurs =>{
        res.status(200).json(foundDinosaurs)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({message: 'Database sleepy sleepy'})
     })
})
router.get('/:id', (req,res)=>{
    db.Dinosaur.findById(req.params.id)
    .then(foundDinosaur=>{
        if(foundDinosaur){
            res.send(foundDinosaur)
        }else{
            res.status(404).json({message: 'Resource not located'})
        }
    }).catch(err=>{
        console.log(err)
        res.status(503).json({message: 'Service Unavailable'})
      })
})

  //Hardcoded test
     //     {
    //     name: 'Brontasaurus',
    //     period: 'Cenozoic'
    // }

//post a new dinosaur
router.post('/', (req, res)=>{
    db.Dinosaur.create(req.body)
  
    .then(createdDinosaur=>{
        res.status(200).json(createdDinosaur)
    })
    .catch(err=>{
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message: 'Validation Error'})
        }else {
            res.status(503).json({message: 'Database or server error'})
        }

    })
    })

    //edit a single Dinosaur
    router.put('/:id', (req, res)=>{
        db.Dinosaur.findOneAndUpdate(
            {_id: req.params.id}, req.body,
            {new:true})
        .then(updatedDinosaur=>{
            res.json(updatedDinosaur)
        })
    .catch(err=>{
        console.log(err)
            res.status(503).json({message: 'Database or server error'})
        })
})
module.exports = router