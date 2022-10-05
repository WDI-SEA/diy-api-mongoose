const db = require('./models')

const pokemonCRUD = async () => {
    try{
        const newPokemon = await db.PokemonCard.create({
            name: 'Giritina V',
            img_Url: 'https://den-cards.pokellector.com/350/Giratina-V.SWSH10.130.44789.png',
            rarity: 'Rare',
            description: 'Pokemon that reins over distortion and entropy.'
        })
    }catch(err){
        console.log(err)
    }
}

pokemonCRUD()