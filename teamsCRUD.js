const db = require("./models");

const createTeam = async () => {
    try {
        await db.Team.create({
            name: "100 Thieves Valorant",
            createdOn: "2020-06-04",
            region: "North America",
            winnings: 264000
        });
    } 
    catch (error) {
        console.warn(error);
    }
}
createTeam();
