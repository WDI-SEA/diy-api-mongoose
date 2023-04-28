const db = require('./models')

const reviewCrud = async () => {
    try {
        const newReview = await db.Review.create({
            location: "Karaage Setsuna",
            rating: 9,
            title: "AMAZING Japanese Hawaiian Fusion!",
            content: "Karaage Setsuna is a small place on the corner of Wall St. and 2nd Ave. The Japanese fried chicken (karaage) will blow your mind 🤯. It's soooo good.",
            tags: ["Restaurant", "Japanese", "Hawaiian", "Chicken"]
        })
    } catch (err) {
        console.log(err)
    }
}

reviewCrud()