const axios = require("axios")
const db = require("./models")

const pokeAPI = async () => {
    try {      
        // for(i=1; i<152; i++) {
            // const pokeNum = i
            // console.log("Pokemon Number:", pokeNum)
            const pokeURL = `https://pokeapi.co/api/v2/type/`
            const pokemon = await axios.get(pokeURL)
            console.log(pokemon.data)
            // const pokemonName = pokemon.data.name
            // console.log("name:",pokemonName)
            // const pokemonWeight = pokemon.data.weight
            // console.log("weight:",pokemonWeight)
            
            // const pokeSpeciesURL = `https://pokeapi.co/api/v2/pokemon/${pokeNum}`
            
            // const pokemonSpecies = await axios.get(pokemon.data.species.url)
            // console.log(pokemonSpecies.data)
            // const pokemonColor = pokemonSpecies.data.color.name
            // console.log("Color: ",pokemonColor)
            
            for(i=0;i<pokemon.data.results.length;i++){
                const newType = await db.PokeType.create({
                    type: pokemon.data.results[i].name
                })
                console.log(newType)
            }

            // const pokemonCreate = await db.Pokemon.create({
            //     name: pokemonName,
            //     color: pokemonColor,
            //     weight: pokemonWeight
            // })
            // console.log(pokemonCreate)
        // }
    } catch (error) {
       console.log(error) 
    }
}
pokeAPI()