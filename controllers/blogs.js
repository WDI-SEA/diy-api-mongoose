//create an instance of the express router
const express = require('express')
const router = express.Router()
const db = require('../models')

//mount our routes on the router

//GET /blog
router.get('/', async (req, res) =>{
    try{
        const blog = await db.Blog.find({})       
        res.json(blog)
    } catch (err){
        console.log(err)
        res.status(500).json({
            msg: 'internal server error, contact the system administrator'
        })
    }

})
//GET /blog/:id
router.get('/:id', async (req, res) =>{
    try{
        const blog = await db.Blog.findById(req.params.id)
        if(!blog){
            res.status(400).json({msg: 'not found'})
            return
        }
        res.json(blog)
    } catch (err){
        console.log(err)
        if(err.kind === "ObjectId"){
            res.status(404).json({msg: err.message})
        } else {
            res.status(500).json({msg: 'internal server error, contact the system administrator'})
        }
    }

})
//POST /blog
router.post('/', async (req, res) =>{
    try{
        const blog = await db.Blog.create(req.body)
        res.json(blog)
    } catch (err){
        console.log(err)
        res.status(500).json({
            msg: 'internal server error, contact the system administrator'
        })
    }

})

//PUT /blog/:id
router.put('/:id', async (req, res) =>{
    try{
        const updatedBlog = await db.Blog.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!updatedBlog){
            res.status(404).json({msg: "not found"})
            return
        }
        res.json(updatedBlog)
    } catch(err){
        console.log(err)
        if(err.kind === "ObjectId"){
            res.status(404).json({msg: err.message})
        }
        res.status(500).json({
            msg: 'internal server error, contact the system administrator'
        })
    }
})


//DELETE /blog/:id 
router.delete('/:id', async (req, res) => {
    try{
        const deletedBlog = await db.Blog.findByIdAndDelete(req.params.id)
        if(!deletedBlog){
            res.status(404).json({msg: "not found"})
            return 
        }
        res.sendStatus(204)

    } catch (err){
        console.log(err)
        if(err.kind === "ObjectId"){
            res.status(404).json({msg: err.message})
        }
        res.status(500).json({
            msg: 'internal server error, contact the system administrator'
        })       
    }
})


module.exports = router