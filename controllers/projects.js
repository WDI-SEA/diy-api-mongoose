const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res)=>{
    db.Project.find()
    .then(foundProject=>{
        res.status(200).json(foundProject)
    })
    .catch(err=>{
        res.status(503).json({message: 'sleepy database?'})
    })

})

//post a new project
router.post('/', (req, res)=>{
    db.Project.create(req.body)
    .then(createdProject=>{
        res.json(createdProject)
    })

    .catch(err=>{
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
          res.status(406).json({message: 'Validation Error'})
        } else {
          res.status(503).json({message:'Database or server error!'})
        }
    })
})
router.put('/:id', (req, res)=>{
    db.Project.findOneAndUpdate({
        _id: req.params.id}, 
        req.body,
        {new: true}
    )
    .then(updatedProject=>{
        res.json(updatedProject)
    })
    .catch(err=>{
        console.log(error)
    })
})

router.delete('/:id', (req, res)=>{
    db.Project.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.status(204).json({message: 'project deleted'})
      })
      .catch(err=>{
        console.log(err)
        res.status(503).json({message: 'Server Error'})
      })
})

module.exports = router