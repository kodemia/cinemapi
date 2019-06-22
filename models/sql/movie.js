const { Model } = require('objection')
const db = require('../lib/db')

Model.knex(db.sql.knex)

class Movie extends Model {
  static get tableName () {
    return 'movie'
  }

  static get jsonSchema () {
    return {
      type: 'object',
      require: ['name', 'genre', 'length'],
      properties: {
        name: {
          type: 'string'
        },
        genre: {
          type: 'string'
        },
        length: {
          type: 'number'
        }
      }
    }
  }
}

module.exports = Movie
