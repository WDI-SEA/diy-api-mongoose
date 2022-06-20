const chalk = require("chalk")
const db = require("../models")

const router = require("express").Router()

// GET /members - Index
router.get("/", async (req, res) => {
  try {
    const members = await db.Member.find()
    res.json(members)
  } catch (error) {
    console.log(chalk.red("Error getting members index"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// GET /members/:id - Show
router.get("/:id", async (req, res) => {
  try {
    const member = await db.Member.findById(req.params.id)

    if (!member) {
      res.sendStatus(404)
      return
    }

    res.json(member)
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" })
      console.log(
        chalk.yellow("Error getting member -- Invalid ID --"),
        chalk.yellow(error)
      )
      return
    }

    console.log(chalk.red("Error getting member"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
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
router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await db.Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!updatedMember) {
      res.sendStatus(404)
      return
    }

    res.json(updatedMember)
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" })
      console.log(
        chalk.yellow("Error getting member -- Invalid ID --"),
        chalk.yellow(error)
      )
      return
    }

    if (error.name === "ValidationError") {
      console.log(
        chalk.yellow("Validation Error updating member"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: error.message })
      return
    }

    console.log(chalk.red("Error updating member"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// DELETE /members/:id - Destroy
router.delete("/:id", async (req, res) => {
  try {
    await db.Member.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ error: "Invalid ID" })
      console.log(
        chalk.yellow("Error deleting member -- Invalid ID --"),
        chalk.yellow(error)
      )
      return
    }

    console.log(chalk.red("Error deleting member"), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// STUB: POST /members/:memberId/books/:bookId - Checkout book
router.post("/:memberId/books/:bookId", (req, res) => {
  res.json("Checkout a book")
})

// STUB: DELETE /members/:memberId/books/:bookId - Return book
router.delete("/:memberId/books/:bookId", (req, res) => {
  res.json("Return a book")
})

module.exports = router
