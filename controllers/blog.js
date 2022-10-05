// requirements
const express = require ("express")
const router = require ("router")
const db = require("../models")


// GET /blog - list of all post
router.get ("/", async (req, res)=>{
    try{
    
    }catch(err){
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// POST /blog - CREATE a new post
router.post("/", async (req, res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({message: "internal server error"}) 
    }
})

// GET /blog/:id - show a specific blog post
router.get ("/:id", async (req, res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// PUT /blog/id - update a blog post
router.put ("./:id",async (req, res)=>{
    try{

    }catch{
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// DELETE /blog/id - delete a post
router.delete("./:id", async (req, res)=>{
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({message: "internal server error"})
    }
})

// export
module.exports=routeer