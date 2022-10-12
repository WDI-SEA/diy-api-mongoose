const mongoose = require("mongoose")

const SkillSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
})

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String
    },
    deployed: {
        type: Boolean
    },
    technologies: [SkillSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model("Project", ProjectSchema)