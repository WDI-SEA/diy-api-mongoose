const db = require('./models')
db.connect()

const BlogSetUp = async () => {
    try {
        // const newPost = await new db.Blog({
        //     name: "El-Dog",
        //     title: "First Blog Post!",
        //     subject: "Coding",
        //     content: "Hello World! Or at least thats what we say when we make our first foray into the great big beatiful world of coding!"
        // })
        // await newPost.save()
        // console.log('new post', newPost)

        const foundPost = await db.Blog.findOne({
            subject: 'Coding'
        })
        console.log('found post', foundPost)

        foundPost.name = 'Ellie'
        await foundPost.save()
        console.log('updated Found Post', foundPost)

    }catch(err) {
        console.log(error)
    }
}

BlogSetUp()