const router = require('express').Router()
const db = require('../models')
// const db = require('../models')

// router.get('/', (req,res)=>{
//     res.json({message: 'Blog index route'})
// })

router.get('/', (req,res)=>{
    db.Blog.find()
    .then(foundBlogs=>{
        res.status(200).json(foundBlogs)
    })
    .catch(err=>{
        console.log(err)
        res.status(503).json({message:'database error'})
    })
})

router.post('/', (req,res)=>{
    db.Blog.create(req.body)

    .then(createdBlog=>{
        res.status(200).json(createdBlog)
    })
    .catch(err=>{
        console.log(`error while creating blog`, err)
        if(err.name === 'Validation Error'){
            res.status(406).json({message: 'Blog validation error'})
        } else {
            res.status(503).json({message: 'Blog databse error '})
        }
    })
})





module.exports = router