
const knex = require('./knex')
const mongo = require('./mongo')

module.exports = {
  sql: knex,
  noSql: mongo
}
