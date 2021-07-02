const db = require('./models')
db.connect()

const blogCRUD = async () => {
    try {
     //CREATE NEW POST
        // const newPost = await new db.Blog({
        //     name: 'Yubaba',
        //     title: 2,
        //     content: 'get the staff down there'
        // })
        // await newPost.save()
        // console.log('new post', newPost)
    //READ POST
        // const foundPost = await db.Blog.findOne({
        //     name: 'Yubaba'
        // })
        // console.log('found post', foundPost)
    //UPDATE 
        // foundPost.content = 'or maybe you prefer a lump of coal'
        // await foundPost.save()
        // console.log('updated post', foundPost)
    //DELETE
        // const deletedPost = await db.Blog.deleteOne({
        //     name: 'Yubaba'
        // })
        // console.log('deleted post', deletedPost)
    } catch(err) {
        console.log(err)
    }
}

blogCRUD()