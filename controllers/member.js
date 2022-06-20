const chalk = require("chalk")

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
router.post("/", (req, res) => {
  res.json("Create Member")
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
