// this page has the mongo connection stuff before hitting the mongo db

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
PORT = 3001
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/Blog', require('./models'))
app.listen (3001, () => {
    console.log('listening')
})
