const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
  const { Spacefarers } = this.entities;


  this.before('CREATE', Spacefarers, (req) => {
    const { stardustCollection, wormholeNavigationSkill, name } = req.data;

    if (!name) {
      req.error(400, 'Name is required');
    }


    if (stardustCollection < 0) {
      req.error(400, 'stardustCollection cannot be negative');
    }


    if (!wormholeNavigationSkill || wormholeNavigationSkill < 1) {
      req.data.wormholeNavigationSkill = 1;
    }

    if (stardustCollection > 1000) {
      req.data.wormholeNavigationSkill += 5;
    }
  });

  

 this.after('CREATE', Spacefarers, (spacefarer, req) => {

    console.log(`after create ${spacefarer.name}`);

  });
});
