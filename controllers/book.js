const router = require("express").Router()
const chalk = require("chalk")
const db = require("../models")

// GET /books - books index
router.get("/", async (req, res) => {
  try {
    const books = await db.Book.find()
    res.json(books)
  } catch (error) {
    console.error(chalk.red("Error in Books index: "), chalk.red(error))
    res.status(500).json("Internal Server Error")
  }
})

// GET /books/:id - show book
router.get("/:id", async (req, res) => {
  try {
    const book = await db.Book.findById(req.params.id)

    if (!book) {
      res.sendStatus(404)
      return
    }

    res.json(book)
  } catch (error) {
    if (error.name === "CastError") {
      console.warn(
        chalk.yellow("GET book error -- Invalid ID --"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: "Invalid ID" })
      return
    }

    console.error(chalk.red("Error in GET books/:id "), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// POST /books - Create
router.post("/", async (req, res) => {
  try {
    const newBook = await db.Book.create(req.body)
    res.status(201).json(newBook)
  } catch (error) {
    if (error.name === "ValidationError") {
      console.log(
        chalk.yellow("Validation Error creating book"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: error.message })
      return
    }

    console.log(chalk.red("Error creating book"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// PUT /books/id - Update book
router.put("/:id", async (req, res) => {
  try {
    const updatedBook = await db.Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedBook) {
      res.sendStatus(404)
      return
    }

    res.json(updatedBook)
  } catch (error) {
    if (error.name === "CastError") {
      console.warn(
        chalk.yellow("PUT book error -- Invalid ID --"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: "Invalid ID" })
      return
    }

    if (error.name === "ValidationError") {
      console.log(
        chalk.yellow("Validation Error updating book"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: error.message })
      return
    }

    console.log(chalk.red("Error updating book"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// DELETE /books/:id - Destroy
router.delete("/:id", async (req, res) => {
  try {
    await db.Book.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" })
      console.log(
        chalk.yellow("Error deleting book -- Invalid ID --"),
        chalk.yellow(error)
      )
      return
    }

    console.log(chalk.red("Error deleting book"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

module.exports = router
