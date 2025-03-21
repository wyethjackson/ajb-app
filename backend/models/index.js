const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

const DictionaryTerm = require('./dictionaryTerm')(sequelize, DataTypes);

module.exports = {
    sequelize,
    DictionaryTerm,
};
