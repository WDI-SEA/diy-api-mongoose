const db = require("../models");
const router = require("express").Router();


// PUT Route | edit a comment
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await db.Blog.findOne({
      "comments._id": id,
    });
    const updatedComment = blog.comments.id(id);
    updatedComment.set(req.body)
    await blog.save();
    if (!updatedComment) return res.status(404).json({ message: "incorrect comment id" });
    res.json(updatedComment);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the server is not going to do that" });
  }
});

// DELETE Route

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await db.Blog.findOne({
      "comments._id": id,
    });
    const foundComment = blog.comments.id(id)
    foundComment.remove()
    await blog.save();
    res.status(204).json({ message: 'The comment is deleted'})
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "something went wrong, terribly wrong" });
  }
});

module.exports = router;
