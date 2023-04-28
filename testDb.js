const db = require('./models')

const chowderCrud = async() => {
    try {
        //CREATE
        // const newCast = db.Chowder({
        //     name: 'Shnitzel',
        //     bio: 'Shnitzel is a rock monster that wears a plain white apron and different pairs of underpants. His ears are small cubes that stick out of the top of his head. He has a tall head (which can be compared to a rectangle) and a relatively small body.',
        //     age: 35,
        //     isAlive: true
        // })
        // await newCast.save()
        // console.log(newCast)
        // READ
        // const foundCast = await db.Chowder.findOne({ name: 'Chowder'})
        // console.log(foundCast)
        // UPDATE 
        // const updatedCast = await db.Chowder.findOneAndUpdate(
        //     { name: 'Shnitzel'},
        //     { isAlive: false },
        //     { new: true}
        // )
        // console.log(updatedCast)
        // DESTROY
        // const deletedCast = await db.Chowder.findOneAndDelete({ name: 'Shnitzel'})
        // console.log(deletedCast)
    } catch(err){
        console.log(err)
    }
}
chowderCrud()