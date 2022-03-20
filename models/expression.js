const mongoose = require('mongoose')

const meaningSchema = new mongoose.Schema({
    meaning: String,
    example: String,        
},{timestamps:true})

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,    
},{timestamps:true})

const expressionSchema = new mongoose.Schema({
    expression: String,    
    language: String,
    translation: String,    
    meanings: [meaningSchema],
    comments:[commentSchema]
},{timestamps:true})

module.exports = mongoose.model('Expr', expressionSchema)