const db = require('./models')

// const blogCrud = async () => {
//   try {
//     const newBlog = new db.Blog({
//       name: 'Bowser',
//       title: 'I Got Princess Peach!!!!',
//       content: 'Make sure Mario stays AWAY!!!!!',
//     })

//     await newBlog.save()
//   } catch (err) {
//     console.warn(err)
//   }
// }

// blogCrud()

const commentCrud = async () => {
  try {
    const newComment = await db.Comment.create({
      content: 'You got it BOSS!!!!',
    })

    const blog = await db.Blog.findById('62ad2e69da91d2ea394c6c4d')

    blog.comments.push(newComment)
    newComment.blogger = blog

    await newComment.save()
    await blog.save()
  } catch (err) {
    console.warn(err)
  }
}

commentCrud()
