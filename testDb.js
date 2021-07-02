const db = require('./models')
db.connect()

const beerCRUD = async () => {
    try{
    // CREATE
        // const newBeer = await new db.Beer({
        //     name:'Coffee Beer',
        //     description:'Adds a versatile smooth roasted flavor to any style of beer. Pairs well with desserts',
        //     rating:7
        // })
        // await newBeer.save()
        // console.log('new beer:', newBeer)

    // READ
    //     const foundBeer = await db.Beer.findOne({
    //         name: 'American Amber Ale'
    //     })
    //     console.log('found beer:', foundBeer)
    // // UPDATE
    //     foundBeer.rating = 6
    //     await foundBeer.save()
    //     console.log('updated Beer:', foundBeer)


    // DESTROY

    } catch(err){
        console.log(err)
    }
}

beerCRUD()