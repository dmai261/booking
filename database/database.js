const Sequelize = require('sequelize');
const Config = require('./config.js');

const sequelize = new Sequelize('betterbnb', Config.username, Config.password, {
  host: 'localhost',
  dialet: 'mysql',
  define: {
    timestamps: false,
  },
});

const Calender = sequelize.define('calendar', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  date: Sequelize.DATE,
});

const House = sequelize.define('houses', {
  house_id: Sequelize.INTEGER,
  reviews: Sequelize.INTEGER,
  price_per_night: Sequelize.INTEGER,
  service_fee: Sequelize.INTEGER,
  cleaning_fee: Sequelize.INTEGER,
});

const CustomerInfo = sequelize.define('customerInfo', {
  house_id: Sequelize.INTEGER,
  price_per_night: Sequelize.INTEGER,
  service_fee: Sequelize.INTEGER,
  cleaning_fee: Sequelize.INTEGER,
  total_charged: Sequelize.INTEGER,
  adults: Sequelize.INTEGER,
  chldren: Sequelize.INTEGER,
  infants: Sequelize.INTEGER,
  start_date: Sequelize.INTEGER,
  end_date: Sequelize.INTEGER,
});
