const db = require ('./models')

const bobaCRUD = async () => {
    try {
        //CREATE
        const newBoba = new db.Boba({
            name: 'Green Thai Tea',
            price: 5,
            description: 'Fragnant Green Tea Leaves combined with a hint of mint and a scent of jasmine'
        })
        await newBoba.save()
        console.log(newBoba)








    } catch(err) {
        console.log(err)
    }
}

bobaCRUD()