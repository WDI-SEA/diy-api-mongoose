const db = require('./models')
db.connect()

const blogCRUD = async () => {
    try {
        const newPost = await new db.Post({
            name: 'A Quote from Morticia',
            tags: ['mood', 'life'],
            content: "I'm just like any modern woman trying to have it all. Loving husband, a family. It's just, I wish I had more time to seek out the dark forces and join their hellish crusade."
        })
        await newPost.save()
        console.log('new post:', newPost)
    } catch(err) {
        console.log(err)
    }
}

blogCRUD()