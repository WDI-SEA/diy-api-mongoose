const express = require("express");
const router = express.Router();
const db = require("../models");

// GET /blogs -- READ array of blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blog.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /blogs/:id -- READ a specific blog
router.get("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /blogs --CREATE a blog
router.post("/", async (req, res) => {
  const blog = new db.Blog({
    name: req.body.name,
    title: req.body.title,
    content: req.body.content,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /blogs/:id -- UPDATE a specific blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (req.body.name != null) {
      blog.name = req.body.name;
    }

    if (req.body.title != null) {
      blog.title = req.body.title;
    }

    if (req.body.content != null) {
      blog.content = req.body.content;
    }

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /blogs/:id -- DESTROY a specific blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findById(req.params.id);
    if (blog == null) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await blog.remove();
    res.json({ message: "Deleted Blog" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
