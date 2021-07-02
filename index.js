// this page has the mongo connection stuff before hitting the mongo db

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
PORT = 3001
app.use(express.urlencoded({extended: false}))
app.use(express.json())

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},
    author: {
        type: String
    },
    published: {
        type: Date
    }
})

const connect = () => {
    mongoose.connect(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindandModify: false
}}

const db = mongoose.connection

db.once('open', () => {
    console.log(`mongoDB connection ${db.host}:${db.port}`)
})

db.on('error', err => {
    console.log('oh no!')
})


app.listen (3001, () => {
    console.log('listening')
})