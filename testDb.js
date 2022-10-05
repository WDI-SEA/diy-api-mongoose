const db = require('./models')

const blogCRUD = async () => {
    try{
        const newBlog = db.Blog({
            name: 'William Shakespeare',

            title: 1,

            content: 'Romeo and Juliet is candle fire 🔥 my companion'
        }) 
        await newBlog.save()
        console.log(newBlog)
    }catch(err){
        console.log(err)
    }
}

blogCRUD()