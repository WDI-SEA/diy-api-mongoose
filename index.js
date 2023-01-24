const express = require('express')
const cors = require('cors')

const app = express()
const port = 8000

require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blog API' })
})

app.use('/blog', require('./controllers/blog'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
