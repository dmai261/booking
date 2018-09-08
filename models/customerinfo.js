'use strict';
module.exports = (sequelize, DataTypes) => {
  const CustomerInfo = sequelize.define('CustomerInfo', {
    house_id: DataTypes.INTEGER,
    price_per_night: DataTypes.INTEGER,
    service_fee: DataTypes.INTEGER,
    total_charged: DataTypes.INTEGER,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    infants: DataTypes.INTEGER,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
  }, {});
  CustomerInfo.associate = function(models) {
    // associations can be defined here
  };
  return CustomerInfo;
};