const db = require('./models')

const inventionCrud = async () => {
    try {
        // make a blog to add comments to
        const newInventor = await db.Inventor.findOneAndUpdate(
            { name: 'Nikola Tesla' },
            { bio: 'Serbian-American engineer and physicist Nikola Tesla (1856-1943) made dozens of breakthroughs in the production, transmission and application of electric power. He invented the first alternating current (AC) motor and developed AC generation and transmission technology. Though he was famous and respected, he was never able to translate his copious inventions into long-term financial success—unlike his early employer and chief rival, Thomas Edison.' },
            { upsert: true, new: true }
        )
        
        console.log('newInventor:', newInventor)

        // CREATE
        // make new comment
        // const newInvention = {
        //     title: 'The Alternating Current',
        //     year: 1893,
        //     description: "When Tesla came to the United States, he worked for Thomas Edison in Manhattan and was promised $50,000 if he could make Edison\'s direct current method successful. As it turned out, Edison\'s DC current was not as effective as Teslas own alternating current method in transmitting electricity over long distances. When Edison reneged on his offer to pay Tesla to solve his DC power design flaws, Tesla quit and moved on to his next endeavor."
        // }
        // // push to array of comments
        // newInventor.inventions.push(newInvention)
        // // save the parent doc (this is the async operation)
        // await newInventor.save() // this puts the comment in the db

        // READ
        // find a comment by id (must find parent doc first)
        // not async
        // const foundInvention = newInventor.inventions.id("633cf7be677b1bb3f77bcd8d")
        // console.log('found invention:', foundInvention)

        // // UPDATE
        // // modify the properties of a comment
        // // foundComment.content = '🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈'
        // // // save the parent doc (this is async)
        // // await newBlog.save()

        // // DESTROY
        // // .remove() is a subdocument instance method
        // newBlog.comments[1].remove() // remove comment at index 1
        // foundComment.remove() // makes a comment remove itself from the array
        // // save the parent doc
        // newBlog.save()
    } catch(err) {
        console.log(err)
    }
}

inventionCrud()