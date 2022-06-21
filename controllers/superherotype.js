const db = require('../models')
const router = require('express').Router()



router.put('/:id', async (req,res) => {
    try {
        const updateHeroType = await db.Superhero.findByIdAndUpdate(req.params.id).populate('type')
        res.json(updateHeroType)
    } catch (err) {
        console.warn(err)
    }

})

router.delete('/:id', async (req,res) => {
    try {
        const deleteType = await db.Superhero.findByIdAndDelete(req.params.id)
        res.sendStatus(204) // successful

    } catch(err) {
        console.warn(err)
    }
})

module.exports = router;