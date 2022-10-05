const db = require('./models')


const recipeCRUD = async () => {
    try {
        // GET (READ ALL)
        const allRecipes = await db.Recipe.find({})
        console.log(allRecipes)

        // POST 
        // const newRecipe = await db.Recipe.create({
        //     name: "Pizza",
        //     ingredients: 'Bread, Cheese, Tomato, Salt, Sugar',
        //     directions: "Slap the dough, place the cheese and tomato sauce on the dough, and throw it into a hot oven for a bit"
        // })

        // console.log(newRecipe)

        // // GET (READ ONE)
        // const oneRecipe = await db.Recipe.find({
        //     name: "Pizza"
        // })
        // console.log(oneRecipe)
        // PUT
        // const updateRecipe = await db.Recipe.findOneAndUpdate(
        //     { id: '633d01790116658ebe86e12c' }, 
        //     { name: 'Margherita Pizza' }, 
        //     { new: true }
        // )
        // console.log(updateRecipe)

        // // DELETE
        // const deleteRecipe = await db.Recipe.findOneAndDelete({ name: "Margherita Pizza" })
        // console.log(deleteRecipe)

    } catch (err) {
        console.warn(err)

    }

}

// recipeCRUD()