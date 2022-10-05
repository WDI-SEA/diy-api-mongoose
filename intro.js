const db = require('./models')

const martialArtistCRUD = async () => {
    try {

        // // CREATE
        // const newMartialArtist = await db.MartialArtist.create({
        //     name: 'Chase Hooper',
        //     nickname: 'The Dream',
        //     weightClass: 145
        // })
        // console.log(newMartialArtist)

        
    } catch(err) {
        console.warn(err)
    }
}

martialArtistCRUD()