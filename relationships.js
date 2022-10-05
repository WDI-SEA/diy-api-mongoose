const db = require('./models')

const setCategories = async () => {
    try {
        // const expense = await db.Expense.findOneAndUpdate({}) // only one expense right now

        // const groceries = await db.Category.findOne({ name: 'groceries' })

        // expense.category = groceries
        
        // await expense.save()

        // const expenseInFull = await db.Expense.findOne({}).populate('category')

        // groceries.expenses.push(expense)

        // groceries.save()

        const categoryInFull = await db.Category.findOne({ name: 'groceries'}).populate('expenses')

        // console.log(expenseInFull)
        console.log(categoryInFull)

    }catch(err) {
        console.warn(err)
    }

}

setCategories()