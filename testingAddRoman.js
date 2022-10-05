
// const addRoman = async () => {
//     try {
//         const addJupiter = db.God.findOneAndUpdate({
//             name: "Zues"
//         }, {
//             romanName: "Jupiter"
//         }, {
//             upsert: true, 
//             new: true
//         })

//         const addNeptune = db.God.findOneAndUpdate({
//             name: "Poseidon"
//         }, {
//             romanName: "Neptune"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addJuno = db.God.findOneAndUpdate({
//             name: "Hera"
//         }, {
//             romanName: "Juno"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addPluto = db.God.findOneAndUpdate({
//             name: "Hades"
//         }, {
//             romanName: "Pluto"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addCeres = db.God.findOneAndUpdate({
//             name: "Demeter"
//         }, {
//             romanName: "Ceres"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addMinerva = db.God.findOneAndUpdate({
//             name: "Athena"
//         }, {
//             romanName: "Minerva"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addApollo = db.God.findOneAndUpdate({
//             name: "Apollo"
//         }, {
//             romanName: "Apollo/Phoebus"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addDiana = db.God.findOneAndUpdate({
//             name: "Artemis"
//         }, {
//             romanName: "Diana"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addMars = db.God.findOneAndUpdate({
//             name: "Ares"
//         }, {
//             romanName: "Mars"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addVulcan = db.God.findOneAndUpdate({
//             name: "Hephaestus"
//         }, {
//             romanName: "Vulcan"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addVenus = db.God.findOneAndUpdate({
//             name: "Aphrodite"
//         }, {
//             romanName: "Venus"
//         }, {
//             upsert: true, 
//             new: true
//         })
//         const addMercury = db.God.findOneAndUpdate({
//             name: "Hermes"
//         }, {
//             romanName: "Mercury"
//         }, {
//             upsert: true, 
//             new: true
//         })

//     } catch(err) {
//         console.warn(err)
//     }
// }
// addRoman()
 
// const addRoman = async () => {
//     try {
//         const addJupiter = ({
//             romanName: 'Jupiter'
//         }, {
//             upsert: true,
//             new: true
//         })
//         const god = db.God.findOne({
//             name: 'Zues'
//         })
//         god.romanVersion.push(addJupiter)
//         await god.save()

//     } catch(err) {
//         console.warn(err)
//     }
// }
// addRoman()