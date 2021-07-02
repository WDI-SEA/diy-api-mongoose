const db = require('./models')
db.connect()

const blogCRUD = async () => {
    try {
        // const newEntry = await new db.Blog({
        //     name: "Test Blog",
        //     title: 1,
        //     content: "You see Mr. Bond, it was all a test."
        // })
        // await newEntry.save()
        // console.log(`new blog entry: ${newEntry}`)
    } catch (err) {
        console.log(err)
    }
}

// const blogCRUD = () => {
//     db.Blog.create({
//         name: "Test Four",
//         title: 4,
//         content: "Also a test."
//     })
//     .then(newPost => console.log(newPost))
//     .catch(err => log(err))
// }

blogCRUD()