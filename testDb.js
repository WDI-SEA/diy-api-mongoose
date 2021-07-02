const db = require('./models')
db.connect()

const blogCRUD = async () => {
    try{
    //     //CREATE
    //     const newDrink = await new db.Drink({
    //         name: 'Coco Milk',
    //         rating: 9
    //     })

    //     await newDrink.save()

    //     console.log(newDrink)

        //READ
        const foundBlog = await db.Post.findOne({
            name: 'Jes'
        })

        console.log('found blog', foundBlog)

        //UPDATE
        // foundDrink.name = 'Ice coco'

        // await foundDrink.save()

        // console.log('updated drink', foundDrink)

        //DESTROY
        // const deletedDrink = await db.Drink.deleteOne({
        //     name: 'Ice coco'
        // })

        // console.log(deletedDrink)

    } catch (err) {
        console.log(err)
    }
}

blogCRUD()