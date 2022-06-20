const chalk = require("chalk")
const db = require("../models")

const router = require("express").Router()

// GET /members - Index
router.get("/", (req, res) => {
  res.json("Members Index")
})

// GET /members/:id - Show
router.get("/:id", (req, res) => {
  res.json("Show member")
})

// POST /members - Create
router.post("/", async (req, res) => {
  try {
    const newMember = await db.Member.create(req.body)
    res.status(201).json(newMember)
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log(
        chalk.yellow("Validation Error creating member"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: error.message })
      return
    }

    console.log(chalk.red("Error creating member"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// PUT /members/:id - Update
router.put("/:id", (req, res) => {
  res.json("Update member")
})

// DELETE /members/:id - Destroy
router.delete("/:id", (req, res) => {
  res.json("Destroy member")
})

// POST /members/:memberId/books/:bookId - Checkout book
router.post("/:memberId/books/:bookId", (req, res) => {
  res.json("Checkout a book")
})

// DELETE /members/:memberId/books/:bookId - Return book
router.delete("/:memberId/books/:bookId", (req, res) => {
  res.json("Return a book")
})

module.exports = router
