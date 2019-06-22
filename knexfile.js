
module.exports = {
  client: 'pg',
  connection: {
    // host: 'cinemapi.chz3sdd3fio0.us-east-1.rds.amazonaws.com',
    host: 'cinemapi-dos.chz3sdd3fio0.us-east-1.rds.amazonaws.com',
    user: 'cinemapi',
    password: 'cinemapi',
    database: 'cinemapi'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
