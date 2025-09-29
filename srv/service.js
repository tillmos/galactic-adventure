const cds = require('@sap/cds');
const { sendEmail } = require('./emailService'); 


module.exports = cds.service.impl(async function () {
  const { Spacefarers } = this.entities;


  this.before('CREATE', Spacefarers, (req) => {
    const { stardustCollection, wormholeNavigationSkill, name } = req.data;

    if (!name) {
      req.error(400, 'Name is required');
    }


    if  (stardustCollection == null || stardustCollection < 0) {
      req.error(400, 'stardustCollection cannot be negative');
    }


    if (!wormholeNavigationSkill || wormholeNavigationSkill < 1) {
      req.data.wormholeNavigationSkill = 1;
    }

    if (stardustCollection > 1000) {
      req.data.wormholeNavigationSkill += 5;
    }
  });

  

 
    this.after('CREATE', Spacefarers, async (spacefarer, req) => {
        console.log(`after create`);

        if (spacefarer.email) {
            await sendEmail(
                spacefarer.email,
                'Your Galactic Journey Begins!',
                `Congratulations ${spacefarer.name}! You have successfully started your cosmic adventure among the stars.`
            );
        }
    });

});