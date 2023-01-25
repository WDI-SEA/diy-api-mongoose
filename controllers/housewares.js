// required packages
const express = require('express')
const { houseware } = require('../models')
const router = express.Router()
const db = require('../models')

// mount our routes on the router

// GET /houseware -- respond w/ all house essentials
router.get('/', async (req, res) => {
    try {
        // find all housewares
        const housewares = await db.houseware.find({})
        res.json(housewares)
    } catch(err) {
        console.log(err)
    }
})

// GET /houseware/:id -- respond with the details of a specific housewares @ id
router.get('/:id', async (req, res) => {
    try {
        // look up a housewares using the id from the request parameters
        const housewares = await db.houseware.findById(req.params.id)
        // if the houseware is not found, respond with 404
        if (!houseware) {
            res.status(404).json({msg: "not found"})
        }
        // respond with the houseware we found
        res.json(houseware)
    } catch(err) {
        console.log(err)
        if (err.kind === 'ObjectId') {
            res.status(404).json({msg:err.message})
        } else {
            res.status(500).json({ msg: 'Interval Server Error, Contact the System administrator'})
        }
        res.json(err)
        //res.status(500).json({msg: 'Interval Server Error, Contact the System Administrator'})
    }
})

// POST /houseware -- accept a payload of data from the request body and use it to make a new bounty
router.post('/', async (req,res) => {
    try {
        // add a new bounty to a db, based on the req.body
        const housewares = await db.houseware.create(req.body)
        // either redirect to where the client can find the new bounty OR send back the new bounty
        res.json(housewares)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg: 'Interval Server Error, Contact your system administrator'})
    }
})

// PUT /houseware/:id -- accept a payload of data from the request body and use it to update a houseware @ id
router.put('/:id', async (req,res) => {
    try {
        // get the id from the url
        // get the data to update in from the req.body
        const updatedHouseware = await db.houseware.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!updatedHouseware) {
            res.status(404).json({msg: "not found"})
            return // dont want to send headers twice
        }
        // send the updated bounty
        res.json(updatedHouseware)
    } catch (err) {
        console.log(err)
        if (err.kind === 'ObjectId') {
            res.status(404).json({msg: 'Interval Server Error, Contact your system administrator'})
        } else {
            res.status(500).json({msg: 'Interval Server Error, Contact the System Administrator'})
        }
    }
})

// DELETE /hosueware/:id -- DESTROY a houseware @ id
router.delete('/:id', async (req, res) => {
    try {
        // get the id from the url, and destroy that id
        const deletedHouseware = await db.houseware.findByIdAndDelete(req.params.id)
        if (!deletedHouseware) {
            res.status(404).json({msg: "not found"})
            return // dont want to send headers twice
        } else {
            res.json({msg: "deleted!"})
        }
    } catch (err) {
        console.log(err)
        if (err.kind === 'ObjectId') {
            res.status(404).json({msg: 'Interval Server Error, Contact your system administrator'})
        } else {
            res.status(500).json({msg: 'Interval Server Error, Contact the System Administrator'})
        }
    }
})

module.exports = router