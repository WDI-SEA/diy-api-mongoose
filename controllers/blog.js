const db = require("../models");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blog.find({});
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on dead" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = await db.Blog.findById(req.params.id);
    res.json(id);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on dead" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBlog = await db.Blog.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on fire" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = {
      new: true,
    };
    const updatedBlog = await db.Blog.findOneAndUpdate(
      {
        _id: id,
      },
      req.body,
      options
    );
    res.json(updatedBlog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the server is broken" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db.Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "the blog is deleted" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "something went wrong" });
  }
});

router.delete("/comment/:id", async (req, res) => {
  try {
    await db.comment.findByIdAndDelete(req.params.id);
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "something went wrong" });
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
