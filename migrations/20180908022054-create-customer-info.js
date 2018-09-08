'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CustomerInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      house_id: {
        type: Sequelize.INTEGER,
      },
      price_per_night: {
        type: Sequelize.INTEGER,
      },
      service_fee: {
        type: Sequelize.INTEGER,
      },
      total_charged: {
        type: Sequelize.INTEGER,
      },
      adults: {
        type: Sequelize.INTEGER,
      },
      children: {
        type: Sequelize.INTEGER,
      },
      infants: {
        type: Sequelize.INTEGER,
      },
      start_date: {
        type: Sequelize.STRING,
      },
      end_date: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CustomerInfos');
  }
};