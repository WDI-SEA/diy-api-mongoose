const db = require("./models")

const blogCRUD = async () => {
  try {
    // CREATE
    const newBlog = await db.Blog.findOneAndUpdate(
      { title: "10 reasons I love General Assembly" },
      { body: "1. It's great. 2. I is much smartor nows that I no how to kode." },
      {
        upsert: true,
        new: true,
      }
    )
    console.log("newblog:", newBlog)

    const newComment = {
      header: "Welcome to my blog.",
      content: "I hope you find my content interesting.",
    }
    newBlog.comments.push(newComment)
    await newBlog.save()

    // // READ
    // const foundComment = newBlog.comments.id("62b10456be2441cc3e4912ac")
    // console.log(foundComment)

    // // UPDATE
    // foundComment.content = "My blog is the best blog."
    // foundComment.header = "Mongoose is the best type of goose."
    // await newBlog.save()

    // // DESTROY
    // newBlog.comments[1].remove() 
    // await newBlog.save()

  } catch (error) {
    console.log(error)
  }
}

blogCRUD()

const userCrud = async () => {
  try {

    const newUser = db.User.create({
      name: 'Emily Kiss'
    })

    const foundBlog = await db.Blog.findOne({})
    newUser.blogs.push(foundBlog)
    foundBlog.blogger = newUser
    await newUser.save()
    await foundBlog.save()

    // READ
    // const foundUser = await db.User.findOne({ name: 'Emily' }).populate({
    //   path: 'blogs',
    //   populate: {
    //     path: 'comments'
    //   }
    // })
    // const foundBlog = await db.Blog.findOne({}).populate({
    //   path: 'blogger',
    //   populate: {
    //     path: 'blogs'
    //   }
    // })
    // console.log(foundBlog.blogger.blogs)

  } catch (error) {
    console.log(error)
  }
}

userCrud()