const { append } = require('express/lib/response')
const db = require('../models')
const router = require('express').Router()

// PUT...(/:id)
router.put('/:id', async (req, res)=> {
    try {

    } catch (err) {
        console.log(err)
    }
})

// DELETE...(/:id)


module.exports = router