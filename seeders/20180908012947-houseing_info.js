'use strict';

const data = [];
for (let i = 100; i < 200; i += 1) {
  data.push({
    house_id: i,
    reviews: Math.floor(Math.random() * 1000),
    price_per_night: Math.floor(Math.random() * 5000),
    service_fee: 35,
    cleaning_fee: Math.floor(Math.random() * 300),
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Houses', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
