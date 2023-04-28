const express = require("express")
const router = express.Router()
const db = require("../models")

// GET /blogs -- READ array of blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blog.find({})
    res.json({ result: blogs })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

//POST /blogs -- CREATE new blog post
router.post("/", async (req, res) => {
  try {
    const newBlog = await db.Blog.create(req.body)
    res.json({ result: newBlog })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "internal Server Error" })
  }
})

//GET /blogs/:id -- SHOW one blog post
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const foundBlog = await db.Blog.findById(id)
    
    res.json({ result: foundBlog })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

//PUT /blogs/:id -- UPDATA one blog post
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params
    const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, { new: true }
    )

    res.json({ result: updatedBlog })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "internal Server Error" })
  }
})

//DELETE /blogs/:id -- DELETE one blog post

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params
    await db.Blog.findByIdAndDelete(id)

    res.sendStatus(204) 
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "internal Server Error" })
  }
})


module.exports = router