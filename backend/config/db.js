
const { Sequelize } = require('sequelize');
const pgp = require('pg-promise')();

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'test',
    database: process.env.DB_NAME || 'postgres',
});

// Test the database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        // Create the database if it doesn't exist
        const dbExists = await pgp({
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || 5432,
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'test',
            database: process.env.DB_NAME || 'postgres'
        }).oneOrNone('SELECT datname FROM pg_database WHERE datname = $1', [process.env.DB_NAME]);

        if (!dbExists) {
            await pgp({
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 5432,
                user: process.env.DB_USER || 'postgres',
                password: process.env.DB_PASSWORD || 'test',
                database: process.env.DB_NAME || 'postgres',
            }).none(`CREATE DATABASE "${process.env.DB_NAME}"`);
            console.log(`Database "${process.env.DB_NAME}" has been created.`);
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize