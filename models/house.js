'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    house_id: DataTypes.INTEGER,
    reviews: DataTypes.INTEGER,
    price_per_night: DataTypes.INTEGER,
    service_fee: DataTypes.INTEGER,
    cleaning_fee: DataTypes.INTEGER
  }, {});
  House.associate = function(models) {
    // associations can be defined here
  };
  return House;
};