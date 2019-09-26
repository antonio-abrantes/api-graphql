// Update with your config settings.
//const { user, database, password } = require('./config/.env');

module.exports = {
    client: 'mysql',
    connection: {
      database: 'graphql',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
