const mongoose = require('mongoose');

//define a simple
const blogSchema = new mongoose.Schema({
    name :
    { type: 'String', required: true },
    title : 
    { type: 'String', required: true },
    content :
    { type: 'String', required: true },
    
});

   
//export the model
module.exports = mongoose.model('Blog', blogSchema);