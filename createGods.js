const db = require('./models')

const godCrud = async () => {

// Creating the gods
const gods= [
    {   name: 'Zues',
        godOf: 'the sky, lightning, thunder, law, order and justice.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Jupiter_Smyrna_Louvre_Ma13.jpg/75px-Jupiter_Smyrna_Louvre_Ma13.jpg',
    
    },
    {
        name: 'Hera',
        godOf: 'marriage, women, childbirth and family.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hera_Campana_Louvre_Ma2283.jpg/75px-Hera_Campana_Louvre_Ma2283.jpg',
    
    },
   {
        name: 'Poseidon',
        godOf: 'the seas, water, storms, hurricanes, earthquakes and horses.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/0036MAN_Poseidon.jpg/75px-0036MAN_Poseidon.jpg',
    
    },
    {
        name: 'Hades',
        godOf: 'the dead and the king of the underworld.',
        img_url: 'https://www.greekmythology.com/images/mythology/hades_large_image_3.jpg',
    
    },
    {
        name: 'Demeter',
        godOf: 'the harvest, fertility, agriculture, nature and the seasons.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Demeter_Altemps_Inv8546.jpg/75px-Demeter_Altemps_Inv8546.jpg',
    
    },
    {
        name: 'Athena',
        godOf: 'wisdom, handicraft, and warfare.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Mattei_Athena_Louvre_Ma530_n2.jpg/75px-Mattei_Athena_Louvre_Ma530_n2.jpg',
    
    },
    {
        name: 'Apollo',
        godOf: 'light, the Sun, prophecy, philosophy, archery, truth, inspiration, poetry, music, arts, manly beauty, medicine, healing, and plague.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Italy-3104_-_Apollo_%285378415112%29.jpg/75px-Italy-3104_-_Apollo_%285378415112%29.jpg',
    
    },
    {
        name: 'Artemis',
        godOf: 'the hunt, the wilderness, virginity, the Moon, archery, childbirth, protection and plague.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Diana_of_Versailles.jpg/75px-Diana_of_Versailles.jpg',
    
    },
    {
        name: 'Ares',
        godOf: 'war, violence, bloodshed and manly virtues.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Ares_Canope_Villa_Adriana_b.jpg/75px-Ares_Canope_Villa_Adriana_b.jpg',
    
    },
    {
        name: 'Hephaestus',
        godOf: 'the forge, craftsmanship, invention, fire and volcanoes.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vulcan_Coustou_Louvre_MR1814.jpg/75px-Vulcan_Coustou_Louvre_MR1814.jpg',
    
    },
    {
        name: 'Aphrodite',
        godOf: 'love, pleasure, passion, procreation, fertility, beauty and desire.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/NAMA_Aphrodite_Syracuse.jpg/75px-NAMA_Aphrodite_Syracuse.jpg',
    
    },
  {
        name: 'Hermes',
        godOf: 'travel, commerce, communication, borders, eloquence, diplomacy, thieves, and games.',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hermes_Ingenui_Pio-Clementino_Inv544.jpg/75px-Hermes_Ingenui_Pio-Clementino_Inv544.jpg',
    
    }
]

 db.God.insertMany(gods)
 const all = db.God.find({})
console.log(all)

}

godCrud()
