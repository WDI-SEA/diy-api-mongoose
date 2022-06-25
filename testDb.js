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
      content: 'The benefits suck working for you!!!!!',
    })

    const blog = await db.Blog.findById('62b513c7fe1f1c7c97c63a8a')

    blog.comments.push(newComment)
    newComment.blogger = blog

    await newComment.save()
    await blog.save()
  } catch (err) {
    console.warn(err)
  }
}

commentCrud()
