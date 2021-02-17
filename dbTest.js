const db = require('./models')

db.pkdStory.create({
    movie: 'A Scanner Darkly',
    book: 'A Scanner Darkly',
    movieYear: '2006', 
    bookYear: '1977'
})
.then(story => {
    console.log(story)
}).catch(err => {
    console.log(err)
})
