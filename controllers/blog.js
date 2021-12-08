const db = require("../models")

const router = require("express").Router()


//index 
router.get('/', (req, res)=>{
      db.Blog.find()
        .then(foundBlogs => {
          res.status(200).json(foundBlogs)
        })
        .catch((err) => {
          console.log(err)
          res.status(503).json({ message: "Database asleep?" })
        })
})

//create a blog post
router.post("/", (req, res) => {
  db.Blog.create(req.body)
    .then(createdBlog => {
      res.status(200).json(createdBlog)
    })
    .catch(err => {
      console.log("Error while creating", err)
      if (err.name === "ValidationError") {
        res.status(406).json({ message: "Validation Error" })
      } else {
        res.status(503).json({ message: "Database or server error!" })
      }
    })
})

//show one blog post 
router.get("/:id", (req, res) => {
  db.Blog.findOne({ _id: req.params.id })
    .then((foundBlogs) => {
      res.status(200).json(foundBlogs)
    })
    .catch((err) => {
      console.log(err)
      res.status(503).json({ message: "Database asleep?" })
    })
})

router.put("/:id", (req, res) => {
  db.Blog.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    { new: true }
  )
    .then((updatedBlog) => {
      res.json(updatedBlog)
    })
    .catch((err) => {
      console.log("Error while creating", err)
      res.status(503).json({ message: "Database or server error!" })
    })
})

router.delete("/:id", (req, res) => {
  db.Blog.deleteOne({ _id: req.params.id })
    .then((deleteBlogs) => {
      res.status(200).json(deleteBlogs)
    })
    .catch((err) => {
      console.log(err)
      res.status(503).json({ message: "Database asleep?" })
    })
})



module.exports=router