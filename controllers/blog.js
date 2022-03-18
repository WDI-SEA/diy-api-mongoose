const db = require("../models")
const router = require("express").Router()

// GET -- "/blog" list all the blog posts
router.get("/", async (req, res) => {
    try {
        // find all the blogs
        const posts = await db.Post.find({})
        //respond with all the blogs
        res.json(posts)
    }catch (err) {
        // if there is an error, send a status and a message
        console.log(err)
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    }
})

// POST -- "/blog" add  a new blog post
router.post("/", (req, res ) => {
    db.Post.create(req.body)
    .then (createdPost=> {
        res.status(201).json(createdPost)
    })
    .catch(err=> {
        if(err.name==="ValidationError"){
            res.status(406).json({message: "Validation Error"})
        }else {
            res.status(503).json({message: "Sorry the Database is on Fire 🔥"})
        }
    })
})

// GET -- "/blog/:id" show one blog post
router.get("/:id", (req, res) => {
    db.Post.findById(req.params.id)
        .then(post => {
            if (!post) return res.status(404).json({ message: "Post Not Found 👀 " })
            res.json(post) 
        })
        .catch(err => {
            console.log(err)
            res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
        })
})
// PUT -- "/blog/:id" update one blog post 
router.put("/:id", async (req, res) => {
    try{
        const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updatedPost) return res.status(404).json({ message: "Post Not Found 👀"})
        res.json(updatedPost)

    } catch(err) {
        console.log(err)
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    }
})
// DELETE -- "/blog/:id" delete one blog post
router.delete("/:id", (req, res) => {
    db.Post.findByIdAndDelete(req.params.id)
    .then(() =>{
        res.status(204).json({ message: "You Deleted a post!"})
    })
    .catch(err => {
        console.log(err)
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    })
})


// adding the comment to the post
router.post("/:id/comment", async (req, res) => {
    try{
        // find the blog at :id
        const post = await db.Post.findById(req.params.id)
        // push it to the blog comment array
        post.comment.push(req.body)
        // save the blog
        await post.save()
        // send the block back in the response
        res.json(post)

    }catch (err) {
        console.log(err)
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    }
})



module.exports = router