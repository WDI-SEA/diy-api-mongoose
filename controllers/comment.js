const express = require("express");
const router = express.Router();
const db = require("../models");

router.put("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findOne({
      "comments._id": req.params.id,
    });
    const comment = await blog.comments.id(req.params.id);

    comment.content = req.body.content;

    await blog.save();

    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ msg: "err" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const blog = await db.Blog.findOne({
      "comments._id": req.params.id,
    });
    blog.comments.id(req.params.id).remove();

    await blog.save();

    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ msg: "error" });
  }
});

router.post("/:id/comment", async (req, res) => {
  try {
    // find the blog at :id
    const blog = await db.Blog.findById(req.params.id);
    // push it to the blog's comment array
    blog.comments.push(req.body);
    // save the blog
    await blog.save();
    // send the blog back inthe response
    res.json(blog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ msg: "error" });
  }
});

module.exports = router;
