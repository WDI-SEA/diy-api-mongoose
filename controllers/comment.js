const router = require("express").Router()
const db = require("../models")

// PUT /comment -- updates a comment @ :id
router.put("/:id", async (req, res) => {
    try{
       const post = await db.Post.findOne({
            "comments._id": req.params
        })
        const comment = await blog.comments.id(req.params.id)

        comment.content = req.body.content
        
        await post.save()

        res.json(post)
    }catch(err) {
        console.log(err)
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    }
  
})

router.delete("/:id/post/:postId", async (req, res) => {
    try{
        const post = await db.Post.findOne({
            "comments._id": req.params.id
        })
        post.comments.id(req.params.id).remove()

        await post.save()
    }catch(err) {
        console.log(err) 
        res.status(503).json({ message: "Sorry the Database is on Fire 🔥" })
    }
})


module.exports = router