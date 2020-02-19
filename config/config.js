const fs = require('fs');
require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'messenger',
    host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 5433,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};