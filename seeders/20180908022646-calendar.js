'use strict';
var moment = require('moment');
let m = moment([2018,0,1])
let date = [];
// for (var j = 100; j< 200; j++) {
  for (var i = 0; i < 365; i++) {
    date.push({date:m.format("dddd, MMMM Do YYYY")});
    m.add(1, 'days');
  }
// }

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Calendars', date, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
