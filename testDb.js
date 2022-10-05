const db = require('./models')

const bandCrud = async () => {
    try {

        // const newBandOne = new db.Band({
        //     name: 'Murder by Death',
        //     members: 'Adam Turla, Sara Balliet, Dagen Thogerson, David Fountain, Tyler Morse, Emma Tiemann',
        //     genre: 'Indie Rock'
        // })
        // await newBandOne.save()
        // console.log('new band created', newBandOne)
    
        // const newBandTwo = new db.Band({
        //     name: 'Pink Floyd',
        //     members: 'David Gilmour, Nick Mason, Richard Wright, Roger Waters, Syd Barrett',
        //     genre: 'Classic Rock'
        // })
        // await newBandTwo.save()
        // console.log('new band created', newBandTwo)
    
        // const newBandThree = new db.Band({
        //     name: 'Amigo the Devil',
        //     members: 'Danny Kiranos',
        //     genre: 'Folk'
        // })
        // await newBandThree.save()
        // console.log('new band created', newBandThree)

        
            const allBands = await db.Band.find({})
            console.log(allBands)


    } catch(err) {
        console.log(err)
    }

}

bandCrud()