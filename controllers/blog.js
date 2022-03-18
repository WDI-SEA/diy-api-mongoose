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
    // it the id from the params
    const { id } = req.params

    db.Post.findById(id)
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
        const id = req.params.id
        // setting options
        const options = {
            new: true
        }

        const updatedPost = await db.Post.findOneAndUpdate({
            _id: id
        }, 
        req.body,
        options
        )
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
        res.status(503).json({ message: "Sorrt the Database is on Fire 🔥" })
    })
})

module.exports = router