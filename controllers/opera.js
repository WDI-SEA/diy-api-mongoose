const router = require('express').Router()
const db = require('../models')

router.get('/', (req,res) => {
    res.json({message: 'opera index route'})
})

module.exports = router