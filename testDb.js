    const db = require('./models')
    const axios = require('axios')

    const heroCRUD = async () => {
        try {
            const newHero = await db.Superhero.create({
               name: 'Grace the Queen',
               power: 'Puff Puff',
               age: 10
            })

            // await heroCRUD.save()


        } catch (err) {
            console.warn('error', err)
        }
    }

    heroCRUD()