const db = require('./models')

// mongosh pluralizes the name

const test = async () =>{
     try {
        // const newPlayer = await db.Futbol.create({
        //     name: 'Ronaldo',
        //     club: 'Al-Nassr',
        //     country: 'Portugal',
        //     age: '37',
        //     rating: '8'
        // })
        const soccer = await db.Futbol.find({

        })
        console.log(soccer)
        // console.log(newPlayer)
    } catch (error) {
        console.log(error)
    }
}
test()