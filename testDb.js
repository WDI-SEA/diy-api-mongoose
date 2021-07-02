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

blogCRUD()