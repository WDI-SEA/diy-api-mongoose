const db = require('./models')
const { update } = require('./models/Blog')

const blogCRUD = async () => {
    try{
        //--CREATE--
        // const newBlog = await db.Blog.create({
        //     name: 'Bugs Bunny',
        //     title: 'Carrots are delicious',
        //     content: 'I really like carrots. They are so good'
        // })
        // console.log(`newBlog: ${newBlog}`)

        // const secondBlog = await db.Blog.create({
        //     name: 'Elmer Fudd',
        //     title: 'Still trying to hunt wabbits',
        //     content: `I tell evewybody to be vewy, vewy quiet because I'm hunting wabbits but it doesn't seem to work.`
        // })
        // console.log(`secondBlog: ${secondBlog}`)

        //--READ--
        // const foundBlog = await db.Blog.findOne({
        //     name: 'Bugs Bunny'
        // })
        // console.log(`foundBlog: ${foundBlog}`)

        //-- UPDATE --
        // const updatedBlog = await db.Blog.findOneAndUpdate(
        //     { name: `Elmer Fudd`},
        //     { content: `Be vewy, vewy quiet. I'm hunting wabbits.`},
        //     { new: true }
        // )
        // console.log(`updatedBlog: ${updatedBlog}`)

        // const upsertedBlog = await db.Blog.findOneAndUpdate(
        //     { name: 'Daffy Duck' },
        //     { title: 'Suffering',
        //       content: 'Succotash' },
        //     { new: true, upsert: true}
        // )
        // console.log(upsertedBlog)
        //-- DESTROY --
        // const wasDeleted = await db.Blog.findOneAndDelete({
        //     name: 'Daffy Duck'
        // })
        // console.log(`wasDeleted: ${wasDeleted}`)
    } catch(error) {
        console.log(error)
    }
}
blogCRUD()