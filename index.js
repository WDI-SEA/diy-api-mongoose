const express = require('express')
const cors = require('cors')

require('./models')

const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to Blog API' })
})

app.use('/blogs', require('./controllers/blogs'))
app.use('/comment', require('./controllers/comment'))

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
