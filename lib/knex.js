
const Knex = require('knex')
const { knexSnakeCaseMappers } = require('objection')

const knex = Knex({
  client: 'pg',
  connection: {
    host: 'cinemapi.chz3sdd3fio0.us-east-1.rds.amazonaws.com',
    user: 'cinemapi',
    password: 'cinemapi',
    database: 'cinemapi'
  },
  ...knexSnakeCaseMappers()
})

module.exports = { knex }
