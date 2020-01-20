// Update with your config settings.

module.exports = {

  production: {
    client: 'mysql',
    connection: {
      host:'127.0.0.1', 
      database: 'wl_mentoria',
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
  }

};
