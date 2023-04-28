const mongoose = require('mongoose')

const loadOutSchema = new mongoose.Schema({

    name: {
        type: String
    },
    primaryWeapon: {
        type: String
    },
    primaryWeaponClass: {
        type: String
    },
    primaryAttachments: [{
        type: String
    }],
    secondaryWeapon: {
        type: String
    },
    secondaryWeaponClass: {
        type: String
    },
    secondaryAttachments: [{
        type: String
    }],
    perk1: {
        type: String
    },
    perk2: {
        type: String
    },
    perk3: {
        type: String
    },
    perk4: {
        type: String
    },
    tacticalEquip: {
        type: String
    },
    lethalEquip: {
        type: String
    },
}, {
    timestamp: true
})

module.exports = mongoose.model("Loadout", loadOutSchema)








