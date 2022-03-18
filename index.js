const express = require('express')
require('./models')
const cors = require('cors')


// middleware
const app = express()
const PORT = 8080

// parse json request bodies
app.use(express.json())
// if (process.env.NODE_ENV != 'pruduction')
app.use(cors())

app.get('/', (req, res) => {
  res.json({ msg: 'welcome to the blog API 👋' })
})

// controllers
app.use('/blog', require('./controllers/blog'))
app.use('/comment', require('./controllers/comment'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))