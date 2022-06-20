const router = require("express").Router()
const db = require("../models")

router.get("/", async (req, res) => {
  try {
    const blog = await db.Blog.find({})
    res.json(blog)
  } catch (error) {
    console.warn(error)
    res.status(500).json({ msg: "server error" })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findById(req.params.id)
    res.json(blog)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
})

router.post("/", async (req, res) => {
  try {
    const newBlog = await db.Blog.create(req.body)
    res.status(201).json(newBlog)
  } catch (error) {
    console.log(error)
    if (error.name === "ValidationError") {
      res.status(400).json({ msg: error.message })
    } else {
      res.status(500).json({ msg: "Server Error" })
    }
  }
})

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const options = { new: true } 
    const updatedBlog = await db.Blog.findByIdAndUpdate(
      id,
      req.body,
      options
    )
    res.json(updatedBlog)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
})

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id
    await db.Blog.findByIdAndDelete(id)
    res.sendStatus(204) 
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: "Server Error" })
  }
})

module.exports = router
