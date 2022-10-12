const db = require ('./models')

const villainCRUD = async () => {
    try {
        // CREATING
            // const newVillain2 = new db.Villain({
            //     img_url: 'https://www.artmajeur.com/medias/hd/a/e/aega-artist/artwork/15033743_08-aega-ursula.jpg',
            //     name: 'Ursula',
            //     wantedFor: 'Attempted murder on the 7 Seas Royal Family and Conspiring against the Monarchy',
            //     client: 'King Triton',
            //     reward: 100000000,
            //     captured: true,
            //     lastSeen: 'In the ocean outside Prince Erics castle',
            //     alive: false

            // })
            // await newVillain2.save()
            // console.log('NEW VILLAIN', newVillain2)
            // const secondVillain = await db.Villain.create({
            //     img_url:'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/QueenSnowWhite.png/256px-QueenSnowWhite.png',
            //     name: 'Evil Queen',
            //     wantedFor: 'Poisoning the Princess, imprisonment of a minor',
            //     client: 'Snow White',
            //     reward: 1000000000,
            //     captured: false,
            //     lastSeen: 'Enchented Forest',
            //     alive: undefined
            // })
            // console.log(secondVillain)
        // READ 
            // const allVillains = await db.Villain.find({})
            // console.log(allVillains)
           
        // UPDATE
            // const updatedVillain = await db.Villain.findOneAndUpdate({ name: 'Evil Queen' }, { alive: false }, { new: true })
            // console.log(updatedVillain)

        // DELETE
            // const deleteVillain = await db.Villain.findOneAndDelete({ name: 'Evil Queen' })
            // console.log(deleteVillain)
    } catch(err) {
        console.log(err)
    }
}
villainCRUD()