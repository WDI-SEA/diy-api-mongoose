const db = require("./models")

const createProject = async () => {
    try {
        const newProject = await db.Project.create({
            title: "diy api",
            deployed: true
        })
        console.log("NEW PROJ", newProject)
    } catch(err) {
        console.log(err)
    }
}

const findProject = async () => {
    try {
        const foundProject = await db.Project.findOne({
            deployed: true
        })
        console.log("found PROJ", foundProject)
    } catch(err) {
        console.log(err)
    }
}

const projectId = "633d9df3aa4d8ebd7ca67618"

const updateProject = async () => {
    try {
        const updatedProject = await db.Project.findOneAndUpdate(
            {
                _id: projectId
            },
            {
                deployed: false
            },
            {
                new: true
            }
        )
        console.log("UPDATED PROJ", updatedProject)
    } catch(err) {
        console.log(err)
    }
}

const deleteProject = async () => {
    try {
        const deletedProject = await db.Project.findOneAndDelete({
            _id: projectId
        })
        console.log("DELETED PROJ")
    } catch(err) {
        console.log(err)
    }
}
