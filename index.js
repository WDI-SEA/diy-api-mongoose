const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

require('./models')

app.use(cors())

app.use(express.json())

app.get('/', (req,res )=> {
    res.json({message: 'gang'})
})

app.use('/movie', require('./controllers/movie'))

app.listen(PORT, () => {
    console.log(`port -${PORT}`)
})