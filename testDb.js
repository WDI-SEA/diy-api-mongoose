const db = require('./models')

const crushCRUD = async () => {
    try {
        // CREATE
        // const newCrush = new db.Crush({
        //     name: 'Emily',
        //     crushName: 'Chris Evens',
        //     content: 'Beacause he is just the best'
        // })
        // await newCrush.save()
        // console.log(newCrush)
        // READ
        // const foundCrush = await db.Crush.findOne({
        //     name: 'Emily'
        // })
        // console.log(foundCrush)
        // UPDATE
        // const updatedCrush = await db.Crush.findOneAndUpdate({ name: 'Emily' }, { crushName: 'Chris Hemsworth' }, { new: true })
        // console.log(updatedCrush)
        // DESTROY
        // const deletedCrush = await db.Crush.findOneAndDelete({ crushName: "Chris Hemsworth" })
        // console.log(deletedCrush)
    } catch (err) {
        console.log('FIRE', err)
    }
}

// crushCRUD()