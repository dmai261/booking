'use strict';
module.exports = (sequelize, DataTypes) => {
  const Calender = sequelize.define('Calender', {
    date: DataTypes.STRING
  }, {});
  Calender.associate = function(models) {
    // associations can be defined here
  };
  return Calender;
};