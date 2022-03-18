const db = require("../models/blog");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const blogs = await db.find({});
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on dead" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = await db.findById(req.params.id);
    res.json(id);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on dead" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBlog = await db.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the database is on fire" });
  }
});

router.post("/blogs/:id/comment", async (req, res) => {
  try {
    const newComment = await db.findOneAndUpdate(blog, comment);
    res.status(201).json(newComment);
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
    const updatedBlog = await db.findOneAndUpdate(
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

router.put("/comment/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = {
      new: true,
    };
    const updatedComment = await db.comment.findOneAndUpdate(
      {
        _id: id,
      },
      req.body,
      options
    );
    res.json(updatedComment);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the server is broken" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await db.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "the blog is deleted" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "something went wrong" });
  }
});

router.delete("/comment/:id", async (req, res) => {
  try {
    await db.comment.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "the blog is deleted" });
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "something went wrong" });
  }
});

module.exports = router;
