const db = require('../models')
const router = require('express').Router()

// list all blog posts
router.get('/', async (req,res)=> {
    try {
        const foundBlog = await db.BlogPost.find({})
        res.json(foundBlog)
    } catch(err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})

// add a new blog post
router.post('/', async (req, res)=>{
    try {
        const blogCreated = await db.BlogPost.create(req.body)
        blogCreated.save()
        res.json(blogCreated)

    } catch(err) {
        console.log(err)
        res.status(503).json({message: `An error occured. Details : ${err}`})
    }
})


// show one blog post
router.get('/:id', async (req,res)=>{
    try{
        const foundBlogPost = await db.BlogPost.findById(req.params.id)
        res.json(foundBlogPost)

    }catch(err){
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

// update one blog post. i will be adding a comment
router.put('/:id', async(req, res)=>{
    try{
        const newComment = await db.BlogPost.findById(req.params.id)
        newComment.comments.push(req.body)
        await newComment.save()
        res.json(newComment)
    }catch(err) {
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

// delete one blog post
router.delete('/:id', async(req, res)=> {
    try {
        const foundBlogPost = await db.BlogPost.findById(req.params.id)
        if(!foundBlogPost){
            res.json({message: 'Cannot find blog post.'})
        }else{
            foundBlogPost.remove()        
            res.json({message: 'Post deleted.'})
        }        
    } catch(err){
        console.log(err)
        res.status(503).json({message:`An error occured. Details : ${err}`})
    }
})

module.exports = router