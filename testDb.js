const db = require("./models");

const BlogCrud = async () => {
    try {
        const newBounty = db.Blog({
            title: "Named after a famous athlete?",
            author: "Buster",
            content: "Sometimes it can be intimidating being named after a famous athlete. I'm named after Buster Posey, a future hall of fame catcher! But you know what... I'm basically just as famous as he is - and so are you!"
        })
        await newBounty.save()

    } catch (error) {
        console.log(error)
    }

}

BlogCrud()