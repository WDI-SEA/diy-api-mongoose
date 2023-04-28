const db = require('./models');

const loadOutCrud = async () => {
    try{
        const newLoadout = new db.Loadout({
            name: "Follow Up Sniper Shot 2",
            primaryWeapon: "Signal 50",
            primaryWeaponClass: "Sniper",
            primaryAttachments: ["21.5 Fluted Fifty", "FSS OLE-V Laser", "Raptor-FVM40", "SO Inline Stock", "SA Finesse Grip" ],
            secondaryWeapon: "Sakin MG38",
            secondaryWeaponClass: "Light Machine Gun",
            secondaryAttachments: ["TY-LR8", "20 Bruen Silver Series Barrel", "Schlager PEQ Box IV", "Aim OP-V4", "Demo Firm Grip"],
            perk1: "Overkill",
            perk2: "Tracker",
            perk3: "Cold Blooded",
            perk4: "Ghost",
            tacticalEquip: "Smoke",
            lethalEquip: "Thermite",

        })


        await newLoadout.save()
        

    } catch(err){
        console.log("Oops something happened")
    }
}

loadOutCrud()