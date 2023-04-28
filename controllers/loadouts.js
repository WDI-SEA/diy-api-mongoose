const express = require('express')
const router = express.Router()
const db = require('../models')

router.get("/", async (req, res) => {
    try {
        const test = await db.Loadout.find({})
        res.json({results: test})
    }catch(err) {
        console.log("error")
        res.status(500).json({ message: "internal server error"})
    }
})

router.get("/:id", async (req,res) => {
    try {

        const {id} = req.params
        const foundLoadout = await db.Loadout.findById(id)
        res.json({ result: foundLoadout})
    }catch(err) {
        console.log("err")
        res.status(500).json({ message: "internal server error"})
    }
})


router.post("/", async (req, res) => {
    try {
    const newLoadout = await db.Loadout.create(req.body)
    res.json({ result: newLoadout })

    }catch(err) {
        console.log("oops that didnt work")
        res.status(500).json({ message: 'Internal Server Error'})

    }
})

router.put("/:id" , async (req, res) => {
    try{
        const {id} = req.params
        const updatedLoadout = await db.Loadout.findByIdAndUpdate(
            id,
            req.body,
            { new: true}
        )
        res.json({ result: updatedLoadout})
    }catch(err){
        console.log("oops that didnt work")
        res.status(500).json({ message: 'Internal Server Error'})
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const {id} = req.params
        await db.Loadout.findByIdAndDelete(id)

        res.sendStatus(204) //send no content status
    }catch(err) {
        console.log("oops that didnt work")
        res.status(500).json({ message: 'Internal Server Error'})
    }
})

module.exports = router