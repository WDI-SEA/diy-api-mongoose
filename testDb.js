const db = require('./models')
db.connect()

const testKB = async () => {
    try {
        const newKeeb = await new db.Blog({
            name: 'Novelkeys NK65 Entry Edition',
            title: 1,
            content: 'Introducing Novelkeys intro keyboard for new enthusiasts at a budget price. 65% layout, top mount design, polycarbonate injection molded.'
        })
        await newKeeb.save()
        console.log('New Keeb:', newKeeb)
    } catch (err) {console.log(err)}
}

