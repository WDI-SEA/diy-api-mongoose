const db = require('./models')
db.connect()

const postCRUD = async () => {
  try {
    // CREATE
    const newPost= await new db.Post({
      name: 'Brady Bunch',
      title: 'Spring start',
      content: "It's the start of a new season!" 
    })

    await newPost.save()

    console.log('new Post:', newPost)

    // READ
    const foundPost= await db.Post.findOne({
      name: 'Han Solo'
    })

    console.log('found Post:', foundPost)

    // UPDATE
    foundPost.name = 'Han'

    await foundPost.save()

    console.log('updated Post:', foundPost)

    // DESTROY
    const deletedPost= await db.Post.deleteOne({
      name: 'Han'
    })

    console.log('deleted Post:', deletedPost)
  } catch (err) {
    console.log(err)
  }
}

postCRUD()