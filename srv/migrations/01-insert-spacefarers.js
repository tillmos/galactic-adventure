const cds = require('@sap/cds');

const { galactic } = require('../db/schema');
const SpacesuitColor = galactic.SpacesuitColor;

module.exports = async (srv) => {
    const db = await cds.connect.to('db');
    const { Spacefarers } = srv.entities;

    const spacefarers = [
        {
            name: 'Luna Starwalker',
            email: 'luna.starwalker@galaxy.org',
            stardustCollection: 1200,
            wormholeNavigationSkill: 5,
            originPlanet: 'Moonbase Alpha',
            spacesuitColor: SpacesuitColor.SILVER
        },
        {
            name: 'Orion Nebula',
            email: 'orion.nebula@galaxy.org',
            stardustCollection: 800,
            wormholeNavigationSkill: 3,
            originPlanet: 'Nebula-9',
            spacesuitColor: SpacesuitColor.BLUE
        },
        {
            name: 'Nova Quasar',
            email: 'nova.quasar@galaxy.org',
            stardustCollection: 1500,
            wormholeNavigationSkill: 6,
            originPlanet: 'Quasar-5',
            spacesuitColor: SpacesuitColor.RED
        }
    ];

    for (const sf of spacefarers) {
        await db.run(INSERT.into(Spacefarers).entries(sf));
    }

    console.log('Sample Spacefarers data inserted using enum values!');
};
