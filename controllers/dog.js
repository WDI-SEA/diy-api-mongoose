const router = require("express").Router()
const db = require("../models")

// index
router.get("/", (req, res)=>{
    db.Dog.find()
    .then(foundDogs=>{
        res.status(200).json(foundDogs)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({message: "is your database asleep bro?"})
    })
})

// post 
router.post("/", (req, res)=>{
    db.Dog.create(req.body)
    .then(createdDog=>{
        res.status(200).json(createdDog)
    })
    .then(createdDog=>{
        res.json(createdDog)
    })
    .catch(err=>{
        console.log("error creating", err)
        if(err.name === "ValidationError"){
            res.status(406).json({mesage: "Validation Error"})
        } else {
            res.status(503).json({mesage: "database or server error"})
        }
    })
})

// put/edit
router.put("/:id", (req, res)=>{
    db.Dog.findOneAndUpdate({_id: req.params.id}, 
    req.body,
    {new:true})
    .then(updatedDog=>{
        res.json(updatedDog)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({message: "errrrrror?"})
    })
})

// delete
router.delete("/:id", (req, res)=>{
    db.Dog.deleteOne(
        
    )
})
module.exports = router