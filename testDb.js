const db = require('./models')

const movieCrud = async () => {
    try{
        //TODO: CREATE
        const newMovie = new db.Movie({
            //     title: 'Donnie Darko',
           //     summary: "During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant, demonic-looking rabbit named Frank, who tells him the world will end in 28 days."
           title: 'The Nightmare Before Christmas',
           content: "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion."
         })
        await newMovie.save()
        //TODO: READ
        const  findMovie = await db.Movie.findById('633d000762d024af474dbea5')
        console.log(findMovie)
        //TODO: UPDATE
        //findMovie.title = "Donnie Dark (2001)"
         findMovie.summary = "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion."
        //console.log(findMovie)
        //TODO: DESTROY
        //const removeMovie = await db.Movie.findByOneAndDelete({
         //   title: "Donnie Darko (2001)"
        //})
        
        //console.log(`Deleted the movie ${removeMovie}`)

    }catch(err){
        console.warn(err)
    }
}
movieCrud()