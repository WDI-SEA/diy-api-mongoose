const express = require('express')
const router = express.Router()
const db = require('../models')

router.get("/", async (req, res) => {
    try {
        const allVillains = await db.Villain.find({})
        res.json(allVillains)
    }catch(err){
        console.log(err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const oneVillain = await db.Villain.findOne({
            _id: req.params.id
        })
        return res.status(200).json({oneVillain})
    } catch(err) {
        console.log(err)
    }
})

module.exports = router