const express = require("express");
const router = express.Router();
const db = require("../models");

// GET /blogs - list all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blog.find({});
    res.json({ results: blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /blogs - add a new blog post
router.post("/", async (req, res) => {
  try {
    const newBlogEntry = await db.Blog.create(req.body);
    res.json({ result: newBlogEntry });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET /blogs/:id - show one blog post
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const foundBlog = await db.Blog.findById(id);
    if (!foundBlog) {
      res.status(404).json({ message: "Blog not found" });
      return;
    }
    res.json({ result: foundBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// PUT /blogs/:id - update one blog post
router.put("/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const updatedBlog = await db.Blog.findByIdAndUpdate(id, req.body, {
      new:true,
    });
    if(!updatedBlog) {
      res.status(404).json({ message:"Blog Not Found"})
    }
    res.json({updatedBlog})
  } catch {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
  }
})

// Delete /blogs/:id delete on blog post
router.delete("/:id", async (req, res) => {
  try {
    const{id} = req.params;
    const deletedBlog = await db.Blog.findByIdAndDelete(id);
    res.sendStatus(204)
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Internal Server Error"})
  }
});

module.exports = router;
