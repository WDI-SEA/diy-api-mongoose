const router = require('express').Router()
const db = require('../models')

router.get('/', async (req,res) => {
    try {
        // find all the superhero
        const superhero = await db.Superhero.find({})
        res.json(superhero)
    } catch (err) {
        console.warn(err)
        res.status(500).json({msg: 'server error'})
    }
})



router.post('/', async (req,res) => {
    try {
        const createHero = await db.Superhero.create(req.body)
        
        // if success send to client
        res.status(201).json(createHero)
    } catch (err) {
        console.log(err)
        if (err.name === 'ValidationError') {
            res.status(400).json({msg: err.message })
        } else {
            res.status(500).json({msg: 'server error'})
        }
    }
})
router.get("/:id", async (req,res)=>{
    try {
        const superhero = await db.Superhero.findById(req.params.id).populate("type")
        res.json(superhero)

    } catch (error) {
        console.log(error)
        res.status(500).json( {msg: "server error"})
    }
})



// PUT /superhero/:id -- update the superhero
router.put('/:id', async (req,res) => {
    try {
        // get the id from the url params
        const id = req.params.id
        // search for the id in the db and update it using req.body
        const options = { new: true}
        const updatedHero = await db.Superhero.findByIdAndUpdate(id, req.body, options )
        res.json(updatedHero)
    } catch (err) {
        console.warn (err)
        res.status(500).json({msg: 'server error'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        // get the id from the req.params
        const id = req.params.id
        // delete the hero in the database
        await db.Superhero.findByIdAndDelete(id)
        // send no content status
        res.sendStatus(204) // was successful
    } catch (err) {
        console.warn(err)
        res.status(500).json({msg: 'server error'})
    }
})


module.exports = router