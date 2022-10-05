const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = 8000

require('./models')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ message: 'Attempt 1 to take over Youtube 👑' })
})

app.use('/videos', require('./controllers/video'))

app.listen(PORT, () => {
  console.log(`endlessly watching on port ${PORT}`)
})