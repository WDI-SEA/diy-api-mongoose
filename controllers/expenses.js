const express = require('express')
const router = express.Router()
const db = require('../models')

// GET '/expenses' -- return array of all expenses
router.get('/', async (req, res) => {
    try{
        const allExpenses = await db.Expense.find({}).populate('category')
        res.json(allExpenses)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

// POST '/expenses' -- add a new expense
router.post('/', async (req, res) => {
    try {
        const newExpense = await db.Expense.create(req.body)
        res.status(201).json(newExpense)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

// GET '/expenses/:id' -- show details for single expense
router.get('/:id', async (req, res) => {
    try {
        const expense = await db.Expense.findById(req.params.id).populate('category')
        res.json(expense)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

// PUT 'expenses/:id' -- update one expense
router.put('/:id', async (req, res) => {
    try {
        const options = {new: true}
        const updatedExpense = await db.Expense.findByIdAndUpdate(req.params.id, req.body, options)
        res.json(updatedExpense)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

// DELETE 'expenses/:id -- delete one expense
router.delete('/:id', async (req, res) => {
    try {
        await db.Expense.findByIdAndDelete(req.params.id)
        res.sendStatus(204)

    }catch(err) {
        console.warn(err)
        res.status(500).json({ message: 'internal server error'})
    }
})

module.exports = router