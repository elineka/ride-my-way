//require('dotenv').config();
const Sequelize = require('sequelize');
module.exports = new Sequelize('postgres://postgres:Data@localhost:5433/ridemyway');

