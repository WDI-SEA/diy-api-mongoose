const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 9000

require ('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'test'})
})

app.use('/boba', require('./controllers/boba'))

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})