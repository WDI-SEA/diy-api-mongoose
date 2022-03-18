const express = require('express')
const app = express()

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//controllers
app.use('/pokemons', require('./controllers/pokemon'))

app.listen(8000, () => {
    console.log('Pokemon trainers are listening!!')
})