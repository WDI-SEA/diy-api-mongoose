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

// POST /members/:memberId/books/:bookId - Checkout book
router.post("/:memberId/books/:bookId", async (req, res) => {
  try {
    const member = await db.Member.findById(req.params.memberId).populate(
      "books"
    )

    if (!member) {
      res.status(404).json({ error: "Member not found" })
      return
    }

    const book = await db.Book.findById(req.params.bookId)

    if (!book) {
      res.status(404).json({ error: "Book not found" })
      return
    }

    if (book.isCheckedOut) {
      res.status(400).json({ error: "Book already checked out" })
      return
    }

    book.isCheckedOut = true
    await book.save()
    member.books.push(book)
    await member.save()

    res.json(member)
  } catch (error) {
    if (error.name === "CastError") {
      console.warn(
        chalk.yellow("Checkout error -- Invalid ID --"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: "Invalid ID", details: error })
      return
    }

    console.error(chalk.red("Error checking out book "), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// DELETE /members/:memberId/books/:bookId - Return book
router.delete("/:memberId/books/:bookId", async (req, res) => {
  try {
    const member = await db.Member.findById(req.params.memberId).populate(
      "books"
    )

    if (!member) {
      res.status(404).json({ error: "Member not found" })
      return
    }

    const memberCheckedOutIds = member.books.map((book) => book.id)

    const book = await db.Book.findById(req.params.bookId)

    if (!book) {
      res.status(404).json({ error: "Book not found" })
      return
    }

    if (!book.isCheckedOut || !memberCheckedOutIds.includes(book.id)) {
      res.status(400).json({ error: "Book not checked out by this user" })
      return
    }

    book.isCheckedOut = false
    await book.save()

    const bookIdx = memberCheckedOutIds.indexOf(book.id)
    member.books.splice(bookIdx, 1)
    await member.save()

    res.json(member)
  } catch (error) {
    if (error.name === "CastError") {
      console.warn(
        chalk.yellow("Checkout error -- Invalid ID --"),
        chalk.yellow(error)
      )
      res.status(400).json({ error: "Invalid ID", details: error })
      return
    }

    console.error(chalk.red("Error returning book "), chalk.red(error))
    res.status(500).json({ error: "Internal Server Error" })
  }
})

module.exports = router
