const db = require("../models");
const express = require("express");
const router = express.Router();
router.get("/", async function (req, res) {
  try {
    const findBlogs = await db.Blog.find({});
    res.json(findBlogs);
  } catch (err) {
    res.status(500).json({ message: "My fault G" });
  }
});

router.get("/:id", async function (req, res) {
  try {
    const findBlog = await db.Blog.findById(req.params.id);
    if (!findBlog) {
      res.status(404).json({ message: "your fault" });
      return;
    }
    res.json(findBlog);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: "My fault G" });
    }
  }
});

router.post("/", async function (req, res) {
  try {
    const newBlog = await db.Blog.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: "My fault G" });
  }
});

router.put("/:id", async function (req, res) {
  try {
    const updateBlog = await db.Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if(!updateBlog){
        res.status(404).json({messaage: "your fault"})
        return
    }
    res.json(updateBlog);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: "My fault G" });
    }
  }
});

router.delete("/:id", async function (req, res) {
  try {
    const deleteBlog = await db.Blog.findByIdAndDelete(req.params.id);
    if (!deleteBlog) {
      res.status(404).json({ message: "Your fault" });
      return;
    }
    res.sendStatus(204);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res.status(404).json({ message: err.message });
    } else {
      res.status(500).json({ message: "My fault G" });
    }
  }
});
module.exports = router;
