const db = require("../models");
const router = require("express").Router();

// GET Route | list of all blog posts
router.get("/", async (req, res) => {
  try {
    const blogs = await db.Blog.find({});
    res.status(200).json(blogs);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "Database cannot come to the phone" });
  }
});

// GET Route Show/Detail of one blog post
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blogDeets = await db.Blog.findById(id);
    res.status(202).json(blogDeets);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "Something aint right here" });
  }
});

// POST Route | Create a new blog post
router.post("/", async (req, res) => {
  try {
    const createdBlog = await db.Blog.create(req.body);
    res.status(201).json(createdBlog);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(406).json({ message: "Validation Error!" });
    } else {
      res.status(503).json({ message: "DB/Server Error!" });
    }
  }
});

// PUT Route | update one blog post
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const options = {
      new: true
    };
    const updatedBlog = await db.Blog.findOneAndUpdate(
      { _id: id},
      req.body,
      options
    );
    if (!updatedBlog) return res.status(404).json({ message: "incorrect id" });
    res.json(updatedBlog);
  } catch (err) {
    console.log(err);
    res.status(503).json({ message: "the server is not going to do that" });
  }
});

// DELETE Route | delete one blog post
router.delete('/:id', (req, res) => {
  db.Blog.findByIdAndDelete(req.params.id)
    .then( () => {
      res.status(204).json({ message: 'The blog is deleted'})
    })
    .catch(err => {
      console.log(err)
      res.status(503).json({ message: 'something went wrong, terribly wrong'})
    }) 
})

// POST Route | Post a new comment

router.post('/:id/comments', async (req, res) => {
  try {
    const foundBlog = await db.Blog.findById(req.params.id)
    foundBlog.comments.push(req.body)
    await foundBlog.save()
    res.status(201).json(foundBlog)
  } catch (err) {
    console.log(err)
    if (err.name === "ValidationError") {
      res.status(406).json({ message: "Validation Error!" });
    } else {
      res.status(503).json({ message: "DB/Server Error!" });
    }
  }
})


module.exports = router;
