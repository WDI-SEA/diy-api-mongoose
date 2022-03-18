const express = require('express')
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/blogs', require('./controllers/blog'))
app.use('/comments', require('./controllers/comment'))

app.listen(PORT, () => {
  console.log(`Do you hear me @ ${PORT}`)
})