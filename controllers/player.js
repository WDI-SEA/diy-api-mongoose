const router = require("express").Router();
const db = require("../models");

router.get('/', (req,res) => {
    db.Player.find()
    .then(foundPlayers=> {
        res.status(200).json(foundPlayers)
    })
    .catch(err=> {
        console.log(err)
        res.status(503).json({message: "Is database asleep"})
    })
})

router.post('/', (req,res) => {
    db.Player.create(req.body)
    .then(createPlayer => {
        res.status(200).json(createPlayer)
    })
    .catch(err => {
        console.log('Error while creating', err)
        if(err.name === 'ValidationError'){
            res.status(406).json({message: "validation Error"})
        } else {
            res.status(503).json({message: "Database error"})
        }
    })
})

router.put('/:id', (req,res) => {
    db.Player.findOneAndUpdate({_id:req.params.id},
        req.body,
        {new:true})
        .then(updatedPlayer => {
            res.json(updatedPlayer)
        })
        .catch(err => {
            console.log(err)
        })
})

router.delete("/:id", (req,res) => {
    db.Player.deleteOne({id:req.params.id
    })
    .catch(error => {
        console.log(error)
    })
})


module.exports = router;
