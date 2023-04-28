//require packages
const express = require('express')
const Router = express.Router()
const db = require('../models')


//ROUTES 
//GET /blogs -- read all of the blogs
Router.get('/', async (req,res)=> {
    try{
        const blogs= await db.Blog.find({})
        res.json({results: blogs})

    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

//GET /blogs/:id --read a specific blog
Router.get('/:id', async (req,res)=> {
    try{
        const {id}= req.params
        const blog = await db.Blog.findById(id)
        res.json({result: blog})

    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

//POST /blogs --Post a blog
// Router.post('/', async (req,res)=> {
//     try{
//         const newBlog = await db.Blog.create(req.body)
//         res.json({result: newBlog})
//     }catch(err){
//         console.log(err)
//         res.status(500).json({ message: "Internal Server Error"})
//     }
// })

//PUT /blogs/:id -- Update a blog
Router.put('/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const blogUpdate = await db.Blog.findByIdAndUpdate(id, req.body, {new: true})
        res.json({result: blogUpdate})

    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

//DELETE /blogs/:id -- Destory a blog
Router.delete('/:id', async (req,res)=> {
    try{
        const {id} = req.params
        const deleteBlog = await db.Blog.findByIdAndDelete(id)
        res.sendStatus(204)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: "Internal Server Error"})
    }
})

//EXPORT
module.exports = Router