const db = require('./models')


const createProject = async () => {
    try {
        const newProject = await db.Project.create({
            title: 'DIY API',
            deployed: false
        })
        console.log("NEW PROJECT\n", newProject)
    } catch(err) {
        console.log('MONGOOSE err \n', err)
    }
}

createProject()